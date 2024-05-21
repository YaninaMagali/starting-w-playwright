import { type Page } from '@playwright/test';

export default class LoginPage{
    
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
      }

      public async visit(domain:string) : Promise<void>{
        await this.page.goto(`https://${domain}.nubestaging.com/account/login`);
    }

    private async fillMail(mail:string) : Promise<void>{
        await this.page.locator("[name='email']").last().fill(mail);
    }

    private async  fillPassword(password:string) :Promise<void> {
        await this.page.locator("[name='password']").last().fill(password);
    }

    private async  submitForm() : Promise<void>{
        await this.page.locator("[value='Iniciar sesión']").last().click();
    }

    public async completeForm(mail:string, password:string){
        await this.fillMail(mail);
        await this.fillPassword(password);
        await this.submitForm();
    }
}
