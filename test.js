const { calculateFinancialData } = require('./script.js');

const red = '\x1b[1;31m';
const green = '\x1b[1;32m';
const reset = '\x1b[0m';

doTest({
    initialCapital: 50000,
    monthlyContribution: 3000,
    recurringIncomes: [
        { amount: 30000, frequency: 12 }
    ],
    oneTimeIncomes: [
        { amount: 207000, month: 9 }
    ],
    annualReturn: 10,
    inflationRate: 3,
    taxRate: 15,
    targetIncome: 80000,
    withdrawalRate: 5
});







function doTest(config) {
    console.log("Running simulation with config:", JSON.stringify(config, null, 2));
    const result = calculateFinancialData(config);
    validateResult(result, config);
}

function validateResult(result, config) {
    if (result.error) {
        console.error("Simulation failed with error:", result.error);
    } else {
        console.log("Simulation successful!");
        console.log("Target Capital Today:", result.targetCapitalToday);
        console.log("Net Annual Return:", result.netAnnualReturn);
        console.log("Max Safe Rate:", result.maxSafeRate);
        console.log("Is Sustainable:", result.isSustainable);
        console.log("Reached:", result.simulation.reached);
        if (result.simulation.reached) {
            console.log("Reached in months:", result.simulation.months);
            console.log("Reached in years:", result.simulation.years);
        } else {
            console.log("Max years simulated:", result.simulation.maxYears);
        }

        let inflationFactor = (1 + config.inflationRate / 100)
        let inflationYears = Math.pow(inflationFactor, result.simulation.years)
        let finalCapitalExpected = result.targetCapitalToday * inflationYears
        console.log("Calculated Target Capital (at reached time):", finalCapitalExpected);
        console.log("Actual Capital (at reached time):", result.simulation.capitalAtTarget);


        // Allow a very small floating point tolerance if they are extremely close
        const diff = finalCapitalExpected - result.simulation.capitalAtTarget;
        let onePercent = Math.max(finalCapitalExpected, result.simulation.capitalAtTarget) * 0.01
        if (Math.abs(diff) < onePercent) {
            console.log(`Assertion ${green}PASSED${reset}: Actual capital reached the target (within tolerance).`);
        } else {
            console.log(`Assertion ${red}FAILED${reset}: Actual capital ${result.simulation.capitalAtTarget} is less than target ${finalCapitalExpected}`);
        }


    }
}

