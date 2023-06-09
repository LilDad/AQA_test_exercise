import { test, expect } from '@playwright/test'
// import test from '../fixtures/fixtures'
import { MainPage } from '../pages/MainPage'
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';
import { WindowsPage } from '../pages/WindowsPage';

test.describe('AQA_tests', async () => {

    test('the first scenario', async ({page}) => {

        const mainPage = new MainPage(page);
        const loginPage = new LoginPage(page);
        const securePage = new SecurePage(page);
    
        await mainPage.open();
        await mainPage.titleIsDisplayed();
        await mainPage.clickAuthenticationForm();
    
        await loginPage.titleIsDisplayed();
        await loginPage.setLogin();
        await loginPage.setPassword();
        await loginPage.clickLoginButton();
    
        await securePage.titleIsDisplayed();

    });
    
    test('the second scenario', async ({page}) => {
    
        const mainPage = new MainPage(page);
        const windowsPage = new WindowsPage(page);
    
        await mainPage.open();
        await mainPage.titleIsDisplayed();
        await mainPage.clickMultipleWindows();

        await windowsPage.titleIsDisplayed();
        await windowsPage.clickClickHereButton();
        await page.pause();
    });
});

