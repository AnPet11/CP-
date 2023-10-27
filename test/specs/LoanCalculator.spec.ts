import LoanCalculator from "../pageobjects/LoanCalculator.ts";

describe('Loan calculator ', () => {      
        it('should compare fixed and annuity schedule monthly payments', async () => {
            await browser.url('https://www.cooppank.ee/kodulaen');
            browser.maximizeWindow();
            await LoanCalculator.clickLoanBtn();
            await LoanCalculator.putTheValueInLoanAmount();
            const annuityMonthlyPayment = await LoanCalculator.MonthlyPaymentValueForBothSchedules();              
            await LoanCalculator.changeScheduleType();
            const fixedMonthlyPayment = await LoanCalculator.MonthlyPaymentValueForBothSchedules();
            await expect(fixedMonthlyPayment).toBeGreaterThan(annuityMonthlyPayment);
            console.log('✅ Fixed monthly payment is bigger than annuity ✅ ' + fixedMonthlyPayment + ' > ' + annuityMonthlyPayment);
        });  
});
