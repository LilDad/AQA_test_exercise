import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
    
    expectedText = this.page.locator('//*[@id="content"]/h1');
    authenticationForm = this.page.locator('//*[@id="content"]/ul/li[21]/a');
    multipleWindows = this.page.locator('//*[@id="content"]/ul/li[33]/a');

    async open() {
        console.log('Open page: https://the-internet.herokuapp.com/');
        await super.open('https://the-internet.herokuapp.com/');
    }

    async titleIsDisplayed() {
        console.log('"Welcome to the-internet" title is displayed');
        await expect(this.expectedText).toHaveText('Welcome to the-internet');
    }

    async clickAuthenticationForm() {
        console.log('Click authentication form');
        await this.authenticationForm.click();
    }

    async clickMultipleWindows() {
        console.log('Click multiple windows');
        await this.multipleWindows.click();
    }
}