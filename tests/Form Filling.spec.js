// @ts-check
import { test, expect } from "@playwright/test";
test("Filling text", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await page.locator("//input[@id='firstName']").fill("Mohamed");
  await page.locator("//input[@id='lastName']").fill("Mohamed");
  await page.locator("//input[@id='userEmail']").fill("aadil@sample.com");
  await page.locator("//label[normalize-space()='Male']").click();
  await page.locator("//input[@id='userNumber']").fill("8888888888");
  await page.locator(".subjects-auto-complete__value-container").click();
  await page.locator("#subjectsInput").fill("physics");
  await page.locator("#subjectsInput").press("Enter");
  await page.locator("//label[normalize-space()='Sports']").check();
  await page.locator("//input[@id='uploadPicture']").setInputFiles({
    name: "file.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is test"),
  });
  await page.locator("//textarea[@id='currentAddress']").fill("62, 3rd street");
  await page.locator("#state svg").click();
  await page.getByText("NCR", { exact: true }).click();
  await page.locator("#city svg").click();
  await page.getByText("Delhi", { exact: true }).click();
  await page.locator("//button[@id='submit']").click();
  await page.waitForTimeout(3000);
});
