class MaximumLoan {
    get maximumLoanCalculatorBtn (): Promise<WebdriverIO.Element> { return $('[href="#loan-tab--2"]'); }
    get monthlyIncomeInput (): Promise<WebdriverIO.Element[]> { return $$('input[data-drupal-selector="edit-monthly-income"]'); }
    get monthlyPayment (): Promise<WebdriverIO.Element[]> { return $$('p.c-form-field__summary.calculation-result .value'); }

    async putTheValueInMonthlyIncome(): Promise<void> {
        console.log('🎀 Setting a value in monthly income that smaller than 550 euro 🎀 ');
        const monthlyIncomeValue = (await this.monthlyIncomeInput)[0];
        await monthlyIncomeValue.setValue(1000);
    };
    async getMonthlyPaymentValue(): Promise<string>{
        const monthlyPaymentValue: string = (await(await this.monthlyPayment)[1].getText());
        console.log('🍪 Getting a monthly payment value 🍪 ' + monthlyPaymentValue);
        return monthlyPaymentValue;
    };
    async clickMaximumLoanBtn (): Promise<void> {
        console.log('🍏 Clicking on "Maximum loan calculator" button 🍏 ');
        await (await this.maximumLoanCalculatorBtn).click();
    };
};
export default new MaximumLoan();