/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node browser verification */
const { chromium } = require("playwright");
const fs = require("fs");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (error) =>
    console.error("BROWSER", page.url(), error.message),
  );
  page.on("pageerror", (error) =>
    errors.push(`${page.url()}: ${error.message}`),
  );
  const checks = [];
  async function capture(path) {
    await page.evaluate(async () => {
      for (const img of document.images) {
        img.loading = "eager";
      }
      await Promise.all(
        [...document.images].map((img) => img.decode().catch(() => {})),
      );
    });
    await page.screenshot({ path, fullPage: true });
  }
  const check = (name, condition) => {
    if (!condition) throw Error(name);
    checks.push(name);
  };
  await page.goto("http://localhost:3100/", { waitUntil: "domcontentloaded" });
  fs.mkdirSync("artifacts/design-review", { recursive: true });
  await capture("artifacts/design-review/home-desktop.png");
  check(
    "Home title",
    (await page.locator("h1").innerText()) ===
      "A living heritage.\nA united people.",
  );
  const routes = [
    "/",
    "/traditional-council",
    "/news",
    "/gallery",
    "/the-throne",
    "/history-and-culture",
    "/contact",
    "/diaspora",
    "/giving",
  ];
  for (const width of [1440, 1024, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto("http://localhost:3100" + route, {
        waitUntil: "domcontentloaded",
      });
      check(`${width} ${route} loads`, response.status() === 200);
      check(
        `${width} ${route} has no horizontal overflow`,
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      );
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3100/");
  await capture("artifacts/design-review/home-mobile.png");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "The Council", exact: true })
    .click();
  await page.waitForURL("**/traditional-council");
  check(
    "Mobile menu closes after navigation",
    (await page.locator("#mobile-nav").count()) === 0,
  );
  await page.getByLabel("Leadership class").selectOption("Second class");
  check(
    "Leadership class filtering",
    (await page.locator(".leader-card").count()) === 1,
  );
  await page.locator(".leader-card").click();
  await page.waitForURL("**/traditional-council/second-class-profile-preview");
  check(
    "Individual chief profile",
    (await page.locator("h1").innerText()) === "Second class chief",
  );
  await page.goto("http://localhost:3100/traditional-council");
  await page.getByLabel("Find a leader or community").fill("no-such-chief");
  check(
    "Directory empty state",
    await page
      .getByRole("heading", { name: "No matching profiles" })
      .isVisible(),
  );
  await page.getByRole("button", { name: "Clear filters" }).click();
  check(
    "Directory clear filters",
    (await page.locator(".leader-card").count()) === 5,
  );
  await page.goto("http://localhost:3100/news");
  await page.getByLabel("Search the journal").fill("scholars");
  check("News search", (await page.locator(".story-card").count()) === 1);
  await page.getByRole("link", { name: "Read story" }).click();
  await page.waitForURL("**/news/educational-endowment-fund");
  check(
    "Matching news detail",
    (await page.locator("h1").innerText()).includes("150 Idoma Scholars"),
  );
  await page.goto("http://localhost:3100/gallery");
  await page
    .getByRole("button", { name: "Palace & heritage", exact: true })
    .click();
  check(
    "Gallery category filter",
    (await page.locator(".photo-card").count()) === 2,
  );
  await page.locator(".photo-card").first().click();
  check("Lightbox opens", await page.locator("dialog").isVisible());
  await page.keyboard.press("ArrowRight");
  check(
    "Lightbox keyboard next",
    (await page.locator("#photo-dialog-title").innerText()).includes(
      "Palace Address",
    ),
  );
  await page.keyboard.press("Escape");
  check("Lightbox escape", !(await page.locator("dialog").isVisible()));
  check(
    "Focus restored",
    await page
      .locator(".photo-card")
      .first()
      .evaluate((el) => el === document.activeElement),
  );
  check(
    "Copy prevention",
    await page
      .locator("h1")
      .evaluate(
        (el) =>
          !el.dispatchEvent(
            new Event("copy", { bubbles: true, cancelable: true }),
          ),
      ),
  );
  await page.goto("http://localhost:3100/news");
  check(
    "Input copy allowed",
    await page
      .locator("input")
      .evaluate((el) =>
        el.dispatchEvent(
          new Event("copy", { bubbles: true, cancelable: true }),
        ),
      ),
  );
  for (const route of [
    "/news/nonexistent",
    "/traditional-council/nonexistent",
  ]) {
    const res = await page.goto("http://localhost:3100" + route);
    check("404 " + route, res.status() === 404);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const route of ["traditional-council", "news", "gallery"]) {
    await page.goto("http://localhost:3100/" + route, {
      waitUntil: "domcontentloaded",
    });
    await capture(`artifacts/design-review/${route}.png`);
  }
  if (errors.length) console.error(JSON.stringify(errors, null, 2));
  check("No browser exceptions", errors.length === 0);
  fs.writeFileSync(
    "artifacts/design-review/checks.json",
    JSON.stringify({ checks, errors }, null, 2),
  );
  console.log(JSON.stringify({ passed: checks.length, errors }));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
