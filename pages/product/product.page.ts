import { Page } from "@playwright/test";

export default class ProductPage{

    page: Page;

    constructor(page: Page) {
        this.page = page;
      }

    public add() {
        this.page.locator('[data-hook="add-to-cart"]')
            .click();
        
    }

}