// @ts-check
import { test, expect } from "@playwright/test";
test("Buttonclicking", async({page})=>{
await page.goto("https://demoqa.com")
await page.locator('path').first().click()
await page.getByText("Buttons").click()
await page.getByRole("button", {name: "Double Click Me" }).dblclick();
await page.getByRole("button",{name: "Right Click Me"}).click();
await page.getByRole('button', { name: 'Click Me', exact: true}).click();
// await page.waitForTimeout(2000);
}
);
