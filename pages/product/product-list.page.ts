import { type Page } from '@playwright/test';
import ProductPage from './product.page';

export default class ProductListPage{
    page: Page;

    constructor(page: Page) {
        this.page = page;
      }
    
    public async visit() : Promise<void>{
        await this.page.goto(`https://www.thecoffeestore.com/category/all-products`);
    }

    public async goToProductPage(name: string) : Promise<void>{
        //const e = this.page.locator(`[aria-label="${name}"] [data-hook="product-item-container"]`);
        const e = this.page.locator('[href="https://www.thecoffeestore.com/product-page/green-fresh"]');
        e.click();
    }
}