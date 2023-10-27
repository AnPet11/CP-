import MaximumLoan from "../pageobjects/MaximumLoan.ts";

describe('Maximum loan calculator ', () => {      
        it('should not depict a monthly payment for a loan', async () => {
            await browser.url('https://www.cooppank.ee/kodulaen');
            browser.maximizeWindow();
            await MaximumLoan.putTheValueInMonthlyIncome();
            await MaximumLoan.clickMaximumLoanBtn();
            const monthlyPaymentIsNotDisplayed: string = await MaximumLoan.getMonthlyPaymentValue();
            await expect(monthlyPaymentIsNotDisplayed).toBe("");
            console.log('💛 Your monthly income need to be more than 550 euro SORRY 💛')
        });  
});
