import { test, expect, type Page } from '@playwright/test';
import LoginPage from '../pages/account/login.page';

test.describe('Successful login', () => {

    test.beforeEach(async ({ page }) => {
        new LoginPage(page).visit('amazonas-ar');
        const title = await page.getByText('Iniciá sesión').last();
        await expect(title).toBeVisible();
      });

    test('Consumer should be logged with valid credentials', { tag: '@smoke' }, async ({page})=>{
        new LoginPage(page).completeForm('validated@test.com', '123456');
        await expect(page).toHaveURL('https://amazonas-ar.nubestaging.com/account/');
    })
} );

test.describe('Login erros', () => {

    test.beforeEach(async ({ page }) => {
        new LoginPage(page).visit('amazonas-ar');
      });

    test('An error message should be displayed for invalid credentials', async ({page})=>{
        new LoginPage(page).completeForm('sarasa@mail.com', '123456');
        const message = await page.getByText('Estos datos no son correctos. ¿Chequeaste que estén bien escritos?').last();
        await expect(message).toBeVisible();
    })
} )