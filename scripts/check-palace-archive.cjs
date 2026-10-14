/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("playwright");
const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
function data(p) {
  const e = {};
  new Function(
    "exports",
    ts.transpileModule(fs.readFileSync(p, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText,
  )(e);
  return e;
}
(async () => {
  const b = await chromium.launch({ channel: "chrome", headless: true });
  const p = await b.newPage();
  const base = process.env.PALACE_TEST_URL || "http://localhost:3104";
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  fs.mkdirSync("artifacts/feedback-review", { recursive: true });
  const metrics = {};
  let checks = 0;
  const routes = [
    "/",
    "/news",
    "/archive",
    "/traditional-council",
    "/history-and-culture",
    "/the-throne",
    ...data("src/lib/leadership.ts").leaders.map(
      (e) => "/traditional-council/" + e.slug,
    ),
    ...data("src/lib/archive.ts").archiveEntries.map(
      (e) => "/archive/" + e.slug,
    ),
  ];
  for (const route of routes) {
    const r = await p.request.get(base + route);
    assert.equal(r.status(), 200, route);
    const html = await r.text();
    assert(
      !/anniversary programme|2024 programme|printed programme/i.test(html),
      route + " source-centric copy",
    );
    checks++;
  }
  for (const width of [320, 390, 768, 1280, 1440]) {
    await p.setViewportSize({ width, height: 844 });
    for (const route of [
      "/",
      "/news",
      "/traditional-council",
      "/archive",
      "/history-and-culture",
    ]) {
      await p.goto(base + route);
      await p.locator("h1").waitFor();
      assert(
        await p.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        "Overflow " + width + route,
      );
      checks++;
      if (width === 390) {
        if (route === "/")
          metrics.hero = await p
            .locator(".palace-hero")
            .evaluate((e) => ({
              height: e.getBoundingClientRect().height,
              headline: document.querySelector("h1").getBoundingClientRect()
                .top,
              cta: document
                .querySelector(".hero-content .palace-button")
                .getBoundingClientRect().top,
            }));
        if (route === "/news")
          metrics.firstStory = await p
            .locator(".story-card")
            .first()
            .evaluate((e) => e.getBoundingClientRect().top);
        if (route === "/traditional-council")
          metrics.councilSearch = await p
            .locator('input[type="search"]')
            .evaluate((e) => e.getBoundingClientRect().top);
        if (["/", "/news", "/traditional-council"].includes(route)) {
          await p.locator("main img").evaluateAll(async (imgs) =>
            Promise.all(
              imgs.slice(0, 3).map((i) => {
                i.loading = "eager";
                return i.decode().catch(() => {});
              }),
            ),
          );
          await p.screenshot({
            path:
              "artifacts/feedback-review/mobile" +
              route.replaceAll("/", "-") +
              ".png",
          });
        }
      }
    }
  }
  assert(metrics.hero.height < 620, JSON.stringify(metrics));
  assert(metrics.hero.headline < 180);
  assert(metrics.firstStory < 560, JSON.stringify(metrics));
  assert(metrics.councilSearch < 400, JSON.stringify(metrics));
  await p.goto(base + "/news");
  assert.equal(await p.locator(".news-filters[open]").count(), 0);
  await p.getByText("Search & filter stories", { exact: true }).click();
  await p.getByLabel("Search stories", { exact: true }).fill("chiefs");
  assert.equal(await p.locator(".story-card").count(), 1);
  await p.getByRole("button", { name: "Announcements", exact: true }).click();
  assert.match(
    await p.locator(".empty-state").innerText(),
    /No current announcements/,
  );
  await p.getByRole("button", { name: "Explore stories" }).click();
  await p.locator(".card-body h2 a").click();
  await p.locator(".article-paragraph").first().waitFor();
  checks++;
  await p.goto(base + "/traditional-council");
  assert.equal(
    await p.locator(".leader-card h2").nth(1).innerText(),
    "Dr. Adegbe Uloko",
  );
  await p.getByRole("combobox").selectOption("Council Secretary");
  assert.equal(await p.locator(".leader-card").count(), 1);
  await p.locator(".leader-card").click();
  await p.waitForURL("**/council-secretary");
  checks++;
  await p.goto(base + "/archive");
  await p.getByLabel("Search the collection").fill("Ujah");
  assert.equal(await p.locator(".archive-card").count(), 1);
  await p.locator(".archive-card").click();
  await p.waitForURL("**/innocent-ujah");
  assert.equal(await p.locator(".source-page").count(), 0);
  checks++;
  await p.goto(base + "/history-and-culture");
  const reading = await p
    .locator(".heritage-narrative p")
    .first()
    .evaluate((e) => {
      const range = document.createRange();
      range.selectNodeContents(e);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      return {
        selected: selection.toString(),
        style: getComputedStyle(e).userSelect,
        copyAllowed: e.dispatchEvent(
          new Event("copy", { bubbles: true, cancelable: true }),
        ),
        contextAllowed: e.dispatchEvent(
          new Event("contextmenu", { bubbles: true, cancelable: true }),
        ),
      };
    });
  assert.equal(reading.style, "none");
  assert(!reading.copyAllowed && !reading.contextAllowed);
  await p.emulateMedia({ media: "print" });
  assert(!(await p.locator("main").isVisible()));
  await p.pdf({
    path: "artifacts/feedback-review/heritage-print.pdf",
    format: "A4",
  });
  checks++;
  assert.deepEqual(errors, []);
  fs.writeFileSync(
    "artifacts/feedback-review/results.json",
    JSON.stringify({ checks, metrics, reading, errors }, null, 2),
  );
  console.log(JSON.stringify({ checks, metrics }));
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
