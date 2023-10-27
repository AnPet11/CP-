class LoanCalculator {
    get loanCalculatorBtn (): Promise<WebdriverIO.Element> { return $('[href="#loan-tab"]'); }
    get loanMaxAmountCalculatorBtn (): Promise<WebdriverIO.Element> { return $('[href="#loan-tab--2"]'); }
    get sliders (): Promise<WebdriverIO.Element[]> { return $$('[class="ui-slider-handle ui-state-default ui-corner-all"]'); }
    get paymentSchelduleTypeAnnuity (): Promise<WebdriverIO.Element> { return $('select[name="graafik"]>[selected="selected"]'); }
    get paymentSchelduleTypeFixed (): Promise<WebdriverIO.Element> { return $('select[name="graafik"]>[value="fiks"]'); }
    get monthlyPayment (): Promise<WebdriverIO.Element[]> { return $$('p.c-form-field__summary.calculation-result .value'); }

    async clickLoanBtn (): Promise<void> {
        console.log('🍏 Clicking on "Loan calculator" button 🍏 ');
        await (await this.loanCalculatorBtn).click();
    };
    
    async putTheValueInLoanAmount(): Promise<void> {
        console.log('🎀 Moving loan amount and period sliders 🎀 ');
        const loanAmountSlider = (await this.sliders)[0];
        const periodSlider = (await this.sliders)[1];
        await loanAmountSlider.waitForClickable({ timeout: 3000 });
        await loanAmountSlider.dragAndDrop({x: 100, y: 200});
        await periodSlider.waitForClickable({ timeout: 3000 });
        await periodSlider.dragAndDrop({x: -100, y: 200});
    };
    
    async MonthlyPaymentValueForBothSchedules(): Promise<number> {
        const monthlyPaymentAnnuity: number = Number(await(await this.monthlyPayment)[0].getText());
        console.log('🌸 Just looking what I got in function for annuity 🌸 ' + typeof monthlyPaymentAnnuity);
        return monthlyPaymentAnnuity; 
    };
    // async MonthlyPaymentValueForFiXED(): Promise<number> {
    //     const monthlyPaymentFixed: number = Number(await(await this.monthlyPayment)[0].getText());
    //     console.log('🍒 Just looking what I got in function for fixed 🍒 ' + monthlyPaymentFixed);
    //     return monthlyPaymentFixed; 
    // };

    async changeScheduleType (): Promise<void> {
        console.log('🌷 Clicking on "Fixed" value from dropdown 🌷 ');
        await (await this.paymentSchelduleTypeFixed).click();
    };  
};

export default new LoanCalculator();


// soovin arendada ka idee allapool = 1 funktsioon, v6tab massivi v22rtust,
// argumendina viib massivi teise funksiooni, kuhu salvestab ja siis kutsub v6rdluseks specis

// async saveMonthlyPaymentsInArray (MyArray: string[] ): Promise<string[] | undefined> {
//     let savedValuesArray: string[] = [];
//     for (let i=0; i<2; i++) {
//         if (MyArray.length > 0) {
//             let savedValues: string [] = await this.getMonthlyPaymentValueWorksFor2SchelduleTypes222();
//             savedValuesArray.push(savedValues[i])
//             console.log('Just looking what is in saved values ❤💸🦆' + savedValuesArray)
//         };       
//     };
//     return savedValuesArray;
// };
