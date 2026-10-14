/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const checks = [];
  const base = process.env.PALACE_TEST_URL || "http://localhost:3101";
  for (const route of [
    "/",
    "/archive",
    "/traditional-council",
    "/news",
    "/gallery",
    "/the-throne",
    "/history-and-culture",
    "/traditional-council/och-idoma-v",
    "/traditional-council/george-edeh",
    "/traditional-council/ogah-ero",
    "/traditional-council/agangwu-baba-odangala",
    "/traditional-council/emmanuel-okochi",
    "/traditional-council/godwin-idu",
    "/traditional-council/peter-eyikwodani",
    "/traditional-council/john-agidani",
    "/traditional-council/jerry-ochola",
    "/traditional-council/okopi-simon",
    "/traditional-council/zakari-shaibu",
    "/traditional-council/joseph-echobu",
    "/traditional-council/ojoh-ochechema",
    "/traditional-council/sunday-ekele",
    "/traditional-council/pius-abah",
    "/traditional-council/julius-iguve-ade",
    "/traditional-council/ogenyi-ocheme",
    "/traditional-council/emmanuel-obagi",
    "/traditional-council/arubi-inmo-felix",
    "/traditional-council/ogah-john-okponya",
    "/traditional-council/adoga-j-o",
    "/traditional-council/sunday-assam-rogers",
    "/archive/anniversary-programme",
    "/archive/royal-biography",
    "/archive/history-of-the-stool",
    "/archive/first-class-chiefs",
    "/archive/third-class-chiefs",
    "/archive/royal-household",
    "/archive/planning-committee",
    "/archive/palace-in-pictures",
    "/archive/silas-ochejele",
    "/archive/aminu-suleiman",
    "/archive/michael-oglegba",
    "/archive/patrick-olonta",
    "/archive/paul-edeh",
    "/archive/agada-apochi",
    "/archive/innocent-ujah",
    "/archive/ameh-idoko",
    "/archive/bright-ogaji",
    "/archive/ojotu-ojema",
    "/archive/francis-ikpobu",
    "/archive/godwin-obla",
    "/archive/abba-adaudu",
    "/archive/lami-ogenyi",
    "/archive/nick-eworo",
    "/archive/sam-ode",
    "/archive/hyacinth-alia",
  ]) {
    const r = await page.request.get(base + route);
    assert.equal(r.status(), 200, route);
    checks.push("HTTP " + route);
  }
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/archive",
      "/traditional-council",
      "/news",
      "/gallery",
      "/the-throne",
      "/history-and-culture",
      "/archive/first-class-chiefs",
      "/traditional-council/jerry-ochola",
    ]) {
      await page.goto(base + route);
      await page.locator("h1").waitFor();
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        "Overflow " + width + " " + route,
      );
      checks.push("Layout " + width + " " + route);
      if (
        (width === 390 || width === 1440) &&
        [
          "/archive",
          "/traditional-council",
          "/archive/first-class-chiefs",
        ].includes(route)
      ) {
        await page.evaluate(async () => {
          for (const i of document.images) i.loading = "eager";
          await Promise.all(
            [...document.images].map((i) => i.decode().catch(() => {})),
          );
        });
        await page.screenshot({
          path:
            "artifacts/archive-review/" +
            width +
            route.replaceAll("/", "-") +
            ".png",
          fullPage: true,
        });
      }
    }
  }
  await page.goto(base + "/traditional-council");
  assert.equal(await page.locator(".leader-card").count(), 22);
  await page.getByRole("combobox").selectOption("First class");
  assert.equal(await page.locator(".leader-card").count(), 4);
  await page.getByRole("combobox").selectOption("Second class");
  assert.match(
    await page.locator(".empty-state").innerText(),
    /supplied 2024 pages/,
  );
  await page.getByRole("button", { name: "Clear filters" }).click();
  await page.getByLabel("Find a leader or community").fill("Agatu");
  assert.equal(await page.locator(".leader-card").count(), 3);
  await page.getByLabel("Find a leader or community").fill("Jerry");
  await page.locator(".leader-card").click();
  assert.match(await page.locator("article").innerText(), /Acting/);
  await page.getByRole("link", { name: "View the source record" }).click();
  await page.waitForURL("**/archive/third-class-chiefs");
  assert.match(page.url(), /third-class-chiefs/);
  checks.push(
    "Chief search, class filters, missing roster and source navigation",
  );
  await page.goto(base + "/archive");
  assert.equal(await page.locator(".archive-card").count(), 25);
  await page.getByLabel("Record type").selectOption("Citations");
  assert.equal(await page.locator(".archive-card").count(), 17);
  await page.getByLabel("Search the collection").fill("football");
  assert((await page.locator(".archive-card").count()) > 0);
  await page.getByLabel("Search the collection").fill("zzzz");
  assert.equal(await page.locator(".archive-card").count(), 0);
  await page.getByRole("button", { name: "Clear filters" }).click();
  assert.equal(await page.locator(".archive-card").count(), 25);
  await page.goto(base + "/archive/anniversary-programme");
  await page.locator(".source-page").nth(1).locator("summary").click();
  assert(
    (await page.locator(".source-page").nth(1).getAttribute("open")) !== null,
  );
  checks.push("Archive search, filters, empty state, reset and source viewer");
  await page.goto(base + "/news");
  assert.equal(await page.locator(".story-card").count(), 4);
  await page.getByLabel("Search the journal").fill("chiefs");
  assert.equal(await page.locator(".story-card").count(), 1);
  await page.locator(".card-body h2 a").click();
  await page.locator(".article-paragraph").first().waitFor();
  assert.equal(await page.locator(".article-paragraph").count(), 3);
  checks.push("Journal search and complete article");
  await page.goto(base + "/gallery");
  assert.equal(await page.locator(".photo-card").count(), 4);
  await page
    .getByRole("button", { name: "Culture & ceremonies", exact: true })
    .click();
  assert.equal(await page.locator(".photo-card").count(), 1);
  await page.locator(".photo-card").first().click();
  assert(await page.locator("dialog").isVisible());
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Escape");
  assert(!(await page.locator("dialog").isVisible()));
  checks.push("Gallery filters and keyboard lightbox");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Archive", exact: true })
    .click();
  await page.waitForURL("**/archive");
  assert.match(page.url(), /archive/);
  assert.equal(await page.locator("#mobile-nav").count(), 0);
  checks.push("Mobile archive navigation");
  assert.deepEqual(errors, []);
  fs.writeFileSync(
    "artifacts/archive-review/results.json",
    JSON.stringify({ checks, errors }, null, 2),
  );
  console.log(checks.length + " checks passed");
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
