import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class WindowsPage extends BasePage {
    expectedText = this.page.locator('//*[@id="content"]/div/h3');
    clickHereButton = this.page.locator('a[href="/windows/new"]');

    async titleIsDisplayed() {
        console.log('\'Opening a new window\' title is displayed');
        await expect(this.expectedText).toHaveText('Opening a new window');
    }

    async clickClickHereButton() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.click('a[href="/windows/new"]')
        ]);
        
        const expectedFinalText = newPage.locator('//*[@class="example"]/h3');
        await expect(expectedFinalText).toHaveText('New Window');        
    }
}