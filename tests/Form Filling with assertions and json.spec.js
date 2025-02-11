// @ts-check
import { test, expect } from "@playwright/test";
import exp from "constants";
const studentDetails = {
  firstname: "Mohamed",
  lastname: "Aadil",
  email: "aadil@sample.com",
  num: "8888888888",
  subjects: "Physics",
  address: "62, 3rd street",
};


test("Filling text", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(page.url()).toContain("automation-practice-form");
  await page.locator("//input[@id='firstName']").fill(studentDetails.firstname);
  await expect(page.locator("//input[@id='firstName']")).toHaveValue(studentDetails.firstname);
  await page.locator("//input[@id='lastName']").fill(studentDetails.lastNamename);
  await expect(page.locator("//input[@id='lastName']")).toHaveValue(studentDetails.lastname);
  await page.locator("//input[@id='userEmail']").fill(studentDetails.email);
  await expect(page.locator("//input[@id='userEmail']")).toHaveValue(studentDetails.email);
  await page.locator("//label[normalize-space()='Male']").click();
  await expect(page.locator("//label[normalize-space()='Male']")).toBeChecked();
  await page.locator("//input[@id='userNumber']").fill(studentDetails.num);
  await expect(page.locator("//input[@id='userNumber']")).toHaveValue(studentDetails.num);
  await page.locator(".subjects-auto-complete__value-container").click();
  await page.locator("#subjectsInput").fill(studentDetails.subjects);
  await expect(page.locator("#subjectsInput")).toHaveValue(studentDetails.subjects);
  await page.locator("#subjectsInput").press("Enter");
  await page.locator("//label[normalize-space()='Sports']").check();
  await expect(page.locator("//label[normalize-space()='Sports']")).toBeChecked();
  await page.locator("//input[@id='uploadPicture']").setInputFiles({
    name: "file.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is test"),
  });
  await expect(page.locator("//input[@id='uploadPicture']")).toHaveValue("file.txt");
  await page.locator("//textarea[@id='currentAddress']").fill(studentDetails.address);
  await expect(page.locator("//textarea[@id='currentAddress']")).toHaveValue(studentDetails.address);
  await page.locator("#state svg").click();
  await page.getByText("NCR", { exact: true }).click();
  await page.locator("#city svg").click();
  await page.getByText("Delhi", { exact: true }).click();
  await page.locator("//button[@id='submit']").click();
  await page.waitForTimeout(3000);
});
