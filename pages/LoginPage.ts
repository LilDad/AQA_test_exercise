import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    expectedText = this.page.locator('//*[@id="content"]/div/h2');
    loginInput = this.page.locator('//*[@id="username"]');
    passwordInpot = this.page.locator('//*[@id="password"]');
    loginButton = this.page.locator('//*[@id="login"]/button');

    async titleIsDisplayed() {
        console.log('\'Login Page\' title is displayed');
        await expect(this.expectedText).toHaveText('Login Page');
    }

    async setLogin() {
        console.log('Set login');
        await this.loginInput.type('tomsmith');
    }

    async setPassword() {
        console.log('Set password');
        await this.passwordInpot.type('SuperSecretPassword!');
    }

    async clickLoginButton() {
        console.log('Click login button');
        await this.loginButton.click();
    }
}