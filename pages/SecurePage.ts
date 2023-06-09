import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SecurePage extends BasePage {
    expectedText = this.page.locator('//*[@id="flash"]');

    async titleIsDisplayed() {
        console.log('\'You logged into a secure area!\' title is displayed');
        await expect(this.expectedText).toContainText('You logged into a secure area!');
    }
}