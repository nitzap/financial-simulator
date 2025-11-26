const translations = {
    es: {
        title: "Calculadora de objetivo de ingresos por inversiones",
        subtitle: "Modificá los valores y mirá cuánto capital necesitás y en cuántos años podrías llegar, asumiendo reinversión total hasta alcanzar el objetivo.",
        initial_capital: "Capital inicial",
        monthly_contribution: "Aporte mensual",
        recurring_incomes: "Ingresos Recurrentes (Aguinaldos, Bonos, etc.)",
        add_recurring: "+ Agregar Recurrente",
        one_time_incomes: "Ingresos Únicos Futuros",
        add_one_time: "+ Agregar Ingreso",
        annual_return: "Rentabilidad anual esperada",
        inflation_rate: "Inflación anual esperada",
        tax_rate: "Impuesto sobre rentabilidad",
        target_income: "Ingreso anual objetivo (por inversiones)",
        withdrawal_rate: "Tasa de retiro segura (sobre el capital)",
        calculate: "Calcular",
        footer_note: "Notas: Esto es un modelo simplificado. No contempla impuestos, inflación, cambios de tipo de cambio ni años con rendimientos negativos. Es una herramienta de simulación, no asesoramiento financiero.",
        currency_usd: "USD",
        per_year: "% / año",
        month: "Mes",
        months: "Meses",
        every: "Cada",
        amount: "Monto",
        month_n: "Mes N°",
        error_config: "Error de configuración",
        check_inputs: "Revisá ingreso objetivo y tasa de retiro",
        must_be_positive: "Ambos deben ser mayores a 0.",
        result: "Resultado",
        sim_error: "No se pudo simular",
        check_values: "Revisá los valores ingresados.",
        target_capital_future: "Capital Nominal Necesario (Futuro)",
        equivalent_today: "Equivale a <strong>USD {amount}</strong> de hoy.<br>(Ajustado por inflación acumulada de {years} años)",
        time_to_reach: "Tiempo estimado para llegar",
        years_val: "{years} años",
        months_approx: "({months} meses aproximadamente)",
        not_reached: "No alcanzado en {years} años",
        not_reached_desc: "Con estos parámetros no llegás al objetivo ni en {years} años.",
        nominal_breakdown: "Desglose Nominal",
        contributions: "Aportes: USD {amount}",
        contributions: "Aportes: USD {amount}",
        net_return: "Rentabilidad Neta: {net}% (Nominal: {nominal}%)<br>Rentabilidad Real: {real}%<br>Crecimiento: USD {growth}<br>Capital final: USD {final}",
        chart_contributions: "Aportes Acumulados",
        chart_contributions: "Aportes Acumulados",
        chart_growth: "Ganancia / Capital",
        chart_withdrawals_acc: "Retiros Acumulados",
        chart_withdrawals_annual: "Retiros Anuales",
        chart_total_capital: "Capital Total",
        chart_year: "Año",
        chart_month: "Mes",
        chart_year: "Año",
        chart_month: "Mes",
        tooltip_total: "Total",
        tooltip_total: "Total",
        warning_unsustainable: "Cuidado: Con esta tasa de retiro, tu capital real (ajustado por inflación) disminuirá con el tiempo.",
        capital_lasts: "El capital dura ~{years} años",
        max_safe_rate: "(Máx. seguro: {rate}%)"
    },
    en: {
        title: "Investment Income Goal Calculator",
        subtitle: "Adjust the values to see how much capital you need and how many years it might take, assuming full reinvestment until the goal is reached.",
        initial_capital: "Initial Capital",
        monthly_contribution: "Monthly Contribution",
        recurring_incomes: "Recurring Incomes (Bonuses, etc.)",
        add_recurring: "+ Add Recurring",
        one_time_incomes: "Future One-Time Incomes",
        add_one_time: "+ Add Income",
        annual_return: "Expected Annual Return",
        inflation_rate: "Expected Annual Inflation",
        tax_rate: "Tax on Returns",
        target_income: "Target Annual Income (from investments)",
        withdrawal_rate: "Safe Withdrawal Rate (on capital)",
        calculate: "Calculate",
        footer_note: "Notes: This is a simplified model. It does not account for taxes, inflation, exchange rate changes, or years with negative returns. It is a simulation tool, not financial advice.",
        currency_usd: "USD",
        per_year: "% / year",
        month: "Month",
        months: "Months",
        every: "Every",
        amount: "Amount",
        month_n: "Month #",
        error_config: "Configuration Error",
        check_inputs: "Check target income and withdrawal rate",
        must_be_positive: "Both must be greater than 0.",
        result: "Result",
        sim_error: "Could not simulate",
        check_values: "Check entered values.",
        target_capital_future: "Required Nominal Capital (Future)",
        equivalent_today: "Equivalent to <strong>USD {amount}</strong> today.<br>(Adjusted for {years} years of accumulated inflation)",
        time_to_reach: "Estimated Time to Reach",
        years_val: "{years} years",
        months_approx: "({months} months approximately)",
        not_reached: "Not reached in {years} years",
        not_reached_desc: "With these parameters, you won't reach the goal even in {years} years.",
        nominal_breakdown: "Nominal Breakdown",
        contributions: "Contributions: USD {amount}",
        contributions: "Contributions: USD {amount}",
        net_return: "Net Return: {net}% (Nominal: {nominal}%)<br>Real Return: {real}%<br>Growth: USD {growth}<br>Final Capital: USD {final}",
        chart_contributions: "Accumulated Contributions",
        chart_contributions: "Accumulated Contributions",
        chart_growth: "Growth / Capital",
        chart_withdrawals_acc: "Accumulated Withdrawals",
        chart_withdrawals_annual: "Annual Withdrawals",
        chart_total_capital: "Total Capital",
        chart_year: "Year",
        chart_month: "Month",
        chart_year: "Year",
        chart_month: "Month",
        tooltip_total: "Total",
        tooltip_total: "Total",
        warning_unsustainable: "Warning: With this withdrawal rate, your real capital (inflation-adjusted) will decrease over time.",
        capital_lasts: "Capital lasts ~{years} years",
        max_safe_rate: "(Max safe: {rate}%)"
    }
};

let currentLang = 'en'; // Default

function detectLanguage() {
    const saved = localStorage.getItem('app_lang');
    if (saved) {
        return saved;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('es')) {
        return 'es';
    }
    return 'en';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `btn-${lang}`) btn.classList.add('active');
    });

    // Update DOM text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Recalculate to update JS-generated content (results, charts)
    recalculate();
}

function t(key, params = {}) {
    let text = translations[currentLang][key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}

// Initialize
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(detectLanguage());
        loadState(); // Load saved inputs
    });
}

function formatMoney(value) {
    return value.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function formatYears(months) {
    const years = months / 12;
    return years.toFixed(1);
}

function addOneTimeRow(amount = "", month = "") {
    const container = document.getElementById("oneTimeContainer");
    const div = document.createElement("div");
    div.className = "one-time-row";
    div.innerHTML = `
                <div class="input-inline" style="flex: 1;">
                    <span>USD</span>
                    <input type="number" data-i18n-placeholder="amount" placeholder="${t('amount')}" class="one-time-amount" value="${amount}" onchange="recalculate()" onkeyup="recalculate()">
                </div>
                <div class="input-inline" style="flex: 1;">
                    <span data-i18n="month">Mes</span>
                    <input type="number" data-i18n-placeholder="month_n" placeholder="${t('month_n')}" class="one-time-month" value="${month}" onchange="recalculate()" onkeyup="recalculate()">
                </div>
                <button class="btn-remove" onclick="removeRow(this)">✕</button>
            `;
    container.appendChild(div);
}

function addRecurringRow(amount = "", frequency = "") {
    const container = document.getElementById("recurringContainer");
    const div = document.createElement("div");
    div.className = "one-time-row"; // Reuse style
    div.innerHTML = `
                <div class="input-inline" style="flex: 1;">
                    <span>USD</span>
                    <input type="number" data-i18n-placeholder="amount" placeholder="${t('amount')}" class="recurring-amount" value="${amount}" onchange="recalculate()" onkeyup="recalculate()">
                </div>
                <div class="input-inline" style="flex: 1;">
                    <span data-i18n="every">Cada</span>
                    <input type="number" data-i18n-placeholder="months" placeholder="${t('months')}" class="recurring-freq" value="${frequency}" onchange="recalculate()" onkeyup="recalculate()">
                </div>
                <button class="btn-remove" onclick="removeRow(this)">✕</button>
            `;
    container.appendChild(div);
}

function removeRow(btn) {
    btn.parentElement.remove();
    recalculate();
}

function simulateYearsToTarget(initial, monthly, recurringIncomes, oneTimeIncomes, annualReturnPct, inflationPct, targetCapitalToday, withdrawalRate) {
    if (annualReturnPct < 0) return null;
    const maxYears = 100; // hard limit
    let maxMonths = maxYears * 12;
    const monthlyRate = Math.pow(1 + annualReturnPct / 100, 1 / 12) - 1;
    const monthlyInflation = Math.pow(1 + inflationPct / 100, 1 / 12) - 1;

    let capital = initial;
    let currentMonthlyContribution = monthly;
    let months = 0;
    let totalContributed = initial;
    let totalWithdrawn = 0;
    let currentYearlyWithdrawn = 0;

    // "Financial Freedom" State
    let reached = false;
    let reachedMonth = -1;
    let endSimulationMonth = maxMonths;
    let initialWithdrawalAmount = 0;
    let currentWithdrawalAmount = 0;
    let depletionMonth = null; // Month when capital runs out

    // Initialize recurring amounts with their base values
    // We need to clone the array to avoid modifying the original if reused,
    // and to adjust each one for inflation independently.
    // Better: create a local state array for the simulation.
    let currentRecurring = recurringIncomes.map(inc => ({ ...inc }));

    // The nominal target grows month by month with inflation
    // We start with today's value
    let currentTargetCapital = targetCapitalToday;

    const yearlyData = [];
    const monthlyData = [];

    // The loop condition changes: we continue until endSimulationMonth
    while (months < endSimulationMonth) {
        // 1. Check if we reached the target (only the first time)
        if (!reached && capital >= currentTargetCapital) {
            reached = true;
            reachedMonth = months;

            // If unsustainable, simulate longer to find depletion point
            // Max 60 years post-retirement (720 months)
            const isUnsustainable = withdrawalRate > (Math.max(0, annualReturnPct - inflationPct));
            if (isUnsustainable) {
                endSimulationMonth = months + 720;
            } else {
                // Extend 5 years (60 months) more for sustainable cases
                endSimulationMonth = months + 60;
            }

            // Calculate initial monthly withdrawal based on the 4% rule (or user input)
            // Withdrawal Rate is annual, so divide by 12
            // Applied to the accumulated capital at that moment
            initialWithdrawalAmount = (capital * (withdrawalRate / 100)) / 12;
            currentWithdrawalAmount = initialWithdrawalAmount;
        }

        // 2. Capital grows by return
        capital = capital * (1 + monthlyRate);

        if (!reached) {
            // ACCUMULATION PHASE

            // Monthly contribution
            capital += currentMonthlyContribution;
            totalContributed += currentMonthlyContribution;

            months++;

            // Recurring contributions
            for (let i = 0; i < currentRecurring.length; i++) {
                if (months % currentRecurring[i].frequency === 0) {
                    capital += currentRecurring[i].amount;
                    totalContributed += currentRecurring[i].amount;
                }
            }

            // One-Time Incomes
            if (oneTimeIncomes[months]) {
                // The entered amount is "value today", so we adjust for inflation to maintain purchasing power
                const amountToday = oneTimeIncomes[months];
                const amountFuture = amountToday * Math.pow(1 + monthlyInflation, months);

                capital += amountFuture;
                totalContributed += amountFuture;
            }

            // Adjust contributions for inflation
            currentMonthlyContribution *= (1 + monthlyInflation);
            for (let i = 0; i < currentRecurring.length; i++) {
                currentRecurring[i].amount *= (1 + monthlyInflation);
            }

        } else {
            // WITHDRAWAL PHASE (DECUMULATION)
            months++;

            // Withdraw money
            capital -= currentWithdrawalAmount;
            totalWithdrawn += currentWithdrawalAmount;
            currentYearlyWithdrawn += currentWithdrawalAmount;

            // The withdrawal must also be adjusted for inflation to maintain purchasing power
            currentWithdrawalAmount *= (1 + monthlyInflation);

            // Check for depletion
            if (capital <= 0 && depletionMonth === null) {
                capital = 0; // Floor at 0
                depletionMonth = months;
                // Stop simulation shortly after depletion
                endSimulationMonth = months + 1;
            }
        }

        // Save annual data
        if (months % 12 === 0) {
            yearlyData.push({
                year: months / 12,
                capital: capital,
                contributed: totalContributed,
                withdrawn: totalWithdrawn,
                yearlyWithdrawn: currentYearlyWithdrawn,
                isPostTarget: reached
            });
            currentYearlyWithdrawn = 0;
        }

        // Save monthly data
        monthlyData.push({
            month: months,
            capital: capital,
            contributed: totalContributed,
            withdrawn: totalWithdrawn,
            isPostTarget: reached
        });

        // Adjust target for inflation (only for visual reference)
        currentTargetCapital *= (1 + monthlyInflation);
    }

    if (!reached) {
        return {
            reached: false,
            maxYears: maxYears,
            finalCapital: capital,
            finalTargetCapital: currentTargetCapital,
            totalContributed: totalContributed,
            years: maxYears,
            yearlyData: yearlyData,
            monthlyData: monthlyData
        };
    }

    return {
        reached: true,
        months: reachedMonth, // Exact month where it was achieved
        years: reachedMonth / 12,
        finalCapital: capital, // Capital at the end of the extra 5 years
        capitalAtTarget: monthlyData[reachedMonth - 1]?.capital || capital, // Capital at the moment of retirement
        finalTargetCapital: currentTargetCapital,
        totalContributed: totalContributed,
        yearlyData: yearlyData,
        monthlyData: monthlyData,
        reachedMonth: reachedMonth,
        depletionMonth: depletionMonth
    };
}

function calculateFinancialData(config) {
    const {
        initialCapital,
        monthlyContribution,
        recurringIncomes, // Array of {amount, frequency}
        oneTimeIncomes,   // Array of {amount, month}
        annualReturn,
        inflationRate,
        taxRate,
        targetIncome,
        withdrawalRate
    } = config;

    if (withdrawalRate <= 0 || targetIncome <= 0) {
        return { error: 'config_error' };
    }

    // Capital required TODAY for that income
    const targetCapitalToday = targetIncome / (withdrawalRate / 100);

    // Apply tax to nominal return
    const netAnnualReturn = annualReturn * (1 - taxRate / 100);

    // Validation: Check if withdrawal rate is sustainable in real terms
    const maxSafeRate = Math.max(0, netAnnualReturn - inflationRate);
    const isSustainable = withdrawalRate <= maxSafeRate;

    // Convert oneTimeIncomes array to object map for simulation
    const oneTimeIncomesMap = {};
    if (Array.isArray(oneTimeIncomes)) {
        oneTimeIncomes.forEach(item => {
            if (item.amount > 0 && item.month > 0) {
                oneTimeIncomesMap[item.month] = (oneTimeIncomesMap[item.month] || 0) + item.amount;
            }
        });
    }

    const simulation = simulateYearsToTarget(
        initialCapital,
        monthlyContribution,
        recurringIncomes,
        oneTimeIncomesMap,
        netAnnualReturn,
        inflationRate,
        targetCapitalToday,
        withdrawalRate
    );

    if (!simulation) {
        return { error: 'sim_error' };
    }

    return {
        targetCapitalToday,
        netAnnualReturn,
        maxSafeRate,
        isSustainable,
        simulation
    };
}

function recalculate() {
    const initial = Number(document.getElementById("initialCapital").value) || 0;
    const monthly = Number(document.getElementById("monthlyContribution").value) || 0;
    const annualReturn = Number(document.getElementById("annualReturn").value) || 0;
    const inflationRate = Number(document.getElementById("inflationRate").value) || 0;
    const taxRate = Number(document.getElementById("taxRate").value) || 0;
    const targetIncome = Number(document.getElementById("targetIncome").value) || 0;
    const withdrawalRate = Number(document.getElementById("withdrawalRate").value) || 0;

    // Collect recurring incomes
    const recurringIncomes = [];
    const recAmounts = document.querySelectorAll(".recurring-amount");
    const recFreqs = document.querySelectorAll(".recurring-freq");

    for (let i = 0; i < recAmounts.length; i++) {
        const amt = Number(recAmounts[i].value) || 0;
        const freq = Number(recFreqs[i].value) || 0;
        if (amt > 0 && freq > 0) {
            recurringIncomes.push({ amount: amt, frequency: freq });
        }
    }

    // Collect one-time incomes as Array for the API
    const oneTimeIncomes = [];
    const rowAmounts = document.querySelectorAll(".one-time-amount");
    const rowMonths = document.querySelectorAll(".one-time-month");

    for (let i = 0; i < rowAmounts.length; i++) {
        const amt = Number(rowAmounts[i].value) || 0;
        const m = Number(rowMonths[i].value) || 0;
        if (amt > 0 && m > 0) {
            oneTimeIncomes.push({ amount: amt, month: m });
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const result = calculateFinancialData({
        initialCapital: initial,
        monthlyContribution: monthly,
        recurringIncomes,
        oneTimeIncomes,
        annualReturn,
        inflationRate,
        taxRate,
        targetIncome,
        withdrawalRate
    });

    if (result.error === 'config_error') {
        resultsDiv.innerHTML = `
        <div class="result-card">
          <div class="result-title">${t('error_config')}</div>
          <div class="result-value danger">${t('check_inputs')}</div>
          <div class="result-sub">${t('must_be_positive')}</div>
        </div>`;
        return;
    }

    // Update Max Safe Rate UI
    const maxSafeEl = document.getElementById('maxSafeRate');
    if (maxSafeEl) {
        maxSafeEl.innerText = t('max_safe_rate', { rate: result.maxSafeRate.toFixed(2) });
    }

    // Update Warning UI
    const warningEl = document.getElementById('withdrawalWarning');
    if (!result.isSustainable) {
        warningEl.style.display = 'flex';
        let warningText = t('warning_unsustainable');

        // Add depletion info if available
        if (result.simulation && result.simulation.depletionMonth) {
            const monthsLasted = result.simulation.depletionMonth - result.simulation.reachedMonth;
            const yearsLasted = (monthsLasted / 12).toFixed(1);
            warningText += ` (${t('capital_lasts', { years: yearsLasted })})`;
        }

        warningEl.innerText = warningText;
    } else {
        warningEl.style.display = 'none';
    }

    if (result.error === 'sim_error') {
        resultsDiv.innerHTML = `
        <div class="result-card">
          <div class="result-title">${t('result')}</div>
          <div class="result-value danger">${t('sim_error')}</div>
          <div class="result-sub">${t('check_values')}</div>
        </div>`;
        return;
    }

    const sim = result.simulation;

    const targetCard = document.createElement("div");
    targetCard.className = "result-card";
    targetCard.innerHTML = `
      <div class="result-title">${t('target_capital_future')}</div>
      <div class="result-value highlight">USD ${formatMoney(sim.capitalAtTarget)}</div>
      <div class="result-sub">
        ${t('equivalent_today', { amount: formatMoney(result.targetCapitalToday), years: sim.years.toFixed(1) })}
      </div>
    `;

    const horizonCard = document.createElement("div");
    horizonCard.className = "result-card";

    if (sim.reached) {
        horizonCard.innerHTML = `
        <div class="result-title">${t('time_to_reach')}</div>
        <div class="result-value highlight">${t('years_val', { years: formatYears(sim.months) })}</div>
        <div class="result-sub">
          ${t('months_approx', { months: sim.months })}
        </div>
      `;
    } else {
        horizonCard.innerHTML = `
        <div class="result-title">${t('time_to_reach')}</div>
        <div class="result-value danger">${t('not_reached', { years: sim.maxYears })}</div>
        <div class="result-sub">
          ${t('not_reached_desc', { years: sim.maxYears })}
        </div>
      `;
    }

    const breakdownCard = document.createElement("div");
    breakdownCard.className = "result-card";

    const contributed = sim.totalContributed;
    const growth = sim.finalCapital - sim.totalContributed;

    breakdownCard.innerHTML = `
      <div class="result-title">${t('nominal_breakdown')}</div>
      <div class="result-value">
        ${t('contributions', { amount: formatMoney(contributed) })}
      </div>
      <div class="result-sub">
      <div class="result-sub">
        ${t('net_return', { net: result.netAnnualReturn.toFixed(2), nominal: annualReturn, real: (result.netAnnualReturn - inflationRate).toFixed(2), growth: formatMoney(Math.max(growth, 0)), final: formatMoney(sim.finalCapital) })}
      </div>
      </div>
    `;

    resultsDiv.appendChild(targetCard);
    resultsDiv.appendChild(horizonCard);
    resultsDiv.appendChild(breakdownCard);

    renderChart(sim.yearlyData, sim.reachedMonth);
    renderMonthlyChart(sim.monthlyData, sim.reachedMonth);
    saveState();
}

function applyMaxSafeRate() {
    const annualReturn = Number(document.getElementById("annualReturn").value) || 0;
    const inflationRate = Number(document.getElementById("inflationRate").value) || 0;
    const taxRate = Number(document.getElementById("taxRate").value) || 0;

    const netAnnualReturn = annualReturn * (1 - taxRate / 100);
    const maxSafeRate = Math.max(0, netAnnualReturn - inflationRate);

    document.getElementById("withdrawalRate").value = maxSafeRate.toFixed(2);
    recalculate();
}

let chartInstance = null;
let monthlyChartInstance = null;

function renderChart(data, reachedMonth) {
    const ctx = document.getElementById('growthChart').getContext('2d');

    if (chartInstance) {
        chartInstance.destroy();
    }

    const labels = data.map(d => `${t('chart_year')} ${d.year}`);
    const contributedData = data.map(d => d.contributed);
    const growthData = data.map(d => Math.max(0, d.capital - d.contributed));
    const yearlyWithdrawnData = data.map(d => d.yearlyWithdrawn || 0);

    // Vertical annotation (hack using a thin bar dataset or plugin)
    // Since we don't have external plugins, we'll paint the bars a different color after the target
    const reachedYearIndex = reachedMonth ? Math.floor(reachedMonth / 12) : -1;

    // Dynamic colors: if post-target, use a different color
    const growthColors = data.map((d, i) => (reachedYearIndex !== -1 && i >= reachedYearIndex) ? '#a855f7' : '#22c55e'); // Purple for post-retirement

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: t('chart_contributions'),
                    data: contributedData,
                    backgroundColor: '#3b82f6', // Blue
                    stack: 'Stack 0',
                },
                {
                    label: t('chart_growth'),
                    data: growthData,
                    backgroundColor: growthColors,
                    stack: 'Stack 0',
                },
                {
                    label: t('chart_withdrawals_annual'),
                    data: yearlyWithdrawnData,
                    backgroundColor: '#f97316', // Orange
                    stack: 'Stack 1', // Separate stack
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: { color: '#9ca3af' }
                },
                y: {
                    stacked: true,
                    ticks: { color: '#9ca3af' },
                    grid: { color: '#1f2937' }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Verde: Acumulación | Púrpura: Post-Retiro',
                    color: '#e5e7eb',
                    font: {
                        size: 12
                    }
                },
                legend: {
                    labels: { color: '#e5e7eb' }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        },
                        footer: function (tooltipItems) {
                            const index = tooltipItems[0].dataIndex;
                            const item = data[index];
                            return `${t('tooltip_total')}: ` + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(item.capital);
                        }
                    }
                }
            }
        }
    });
}

function renderMonthlyChart(data, reachedMonth) {
    const ctx = document.getElementById('monthlyChart').getContext('2d');

    if (monthlyChartInstance) {
        monthlyChartInstance.destroy();
    }

    // Optimization: if there is a lot of data, show fewer labels on X
    const labels = data.map(d => `${t('chart_month')} ${d.month}`);
    const capitalData = data.map(d => d.capital);
    const contributedData = data.map(d => d.contributed);

    // Dataset for the target vertical line
    const annotations = [];
    if (reachedMonth > 0) {
        // Hack: we cannot easily draw arbitrary lines without a plugin,
        // but we can change the color of the main line.
    }

    monthlyChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: t('chart_total_capital'),
                    data: capitalData,
                    borderColor: function (context) {
                        const index = context.dataIndex;
                        const month = data[index]?.month;
                        return (month > reachedMonth && reachedMonth > 0) ? '#a855f7' : '#22c55e'; // Purple after target
                    },
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    segment: {
                        borderColor: ctx => (data[ctx.p0DataIndex].month >= reachedMonth && reachedMonth > 0) ? '#a855f7' : '#22c55e'
                    }
                },
                {
                    label: t('chart_contributions'),
                    data: contributedData,
                    borderColor: '#3b82f6', // Blue
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                x: {
                    ticks: {
                        color: '#9ca3af',
                        maxTicksLimit: 12 // Limit labels to avoid crowding
                    },
                    grid: { display: false }
                },
                y: {
                    ticks: { color: '#9ca3af' },
                    grid: { color: '#1f2937' }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Evolución Mensual (Verde/Azul: Acumulación | Púrpura: Retiro)',
                    color: '#e5e7eb'
                },
                legend: {
                    labels: { color: '#e5e7eb' }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function saveState() {
    const state = {
        initialCapital: document.getElementById("initialCapital").value,
        monthlyContribution: document.getElementById("monthlyContribution").value,
        annualReturn: document.getElementById("annualReturn").value,
        inflationRate: document.getElementById("inflationRate").value,
        taxRate: document.getElementById("taxRate").value,
        targetIncome: document.getElementById("targetIncome").value,
        withdrawalRate: document.getElementById("withdrawalRate").value,
        oneTimeIncomes: [],
        recurringIncomes: []
    };

    const rowAmounts = document.querySelectorAll(".one-time-amount");
    const rowMonths = document.querySelectorAll(".one-time-month");

    for (let i = 0; i < rowAmounts.length; i++) {
        state.oneTimeIncomes.push({
            amount: rowAmounts[i].value,
            month: rowMonths[i].value
        });
    }

    const recAmounts = document.querySelectorAll(".recurring-amount");
    const recFreqs = document.querySelectorAll(".recurring-freq");

    for (let i = 0; i < recAmounts.length; i++) {
        state.recurringIncomes.push({
            amount: recAmounts[i].value,
            frequency: recFreqs[i].value
        });
    }

    localStorage.setItem("investmentCalcState", JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem("investmentCalcState");
    if (!saved) return;

    try {
        const state = JSON.parse(saved);
        if (state.initialCapital) document.getElementById("initialCapital").value = state.initialCapital;
        if (state.monthlyContribution) document.getElementById("monthlyContribution").value = state.monthlyContribution;
        if (state.annualReturn) document.getElementById("annualReturn").value = state.annualReturn;
        if (state.inflationRate) document.getElementById("inflationRate").value = state.inflationRate;
        if (state.taxRate) document.getElementById("taxRate").value = state.taxRate;
        if (state.targetIncome) document.getElementById("targetIncome").value = state.targetIncome;
        if (state.withdrawalRate) document.getElementById("withdrawalRate").value = state.withdrawalRate;

        // Load one-time incomes
        const container = document.getElementById("oneTimeContainer");
        container.innerHTML = ""; // Clear existing
        if (state.oneTimeIncomes && Array.isArray(state.oneTimeIncomes)) {
            state.oneTimeIncomes.forEach(item => {
                addOneTimeRow(item.amount, item.month);
            });
        }

        // Load recurring incomes
        const recContainer = document.getElementById("recurringContainer");
        recContainer.innerHTML = ""; // Clear existing
        if (state.recurringIncomes && Array.isArray(state.recurringIncomes)) {
            state.recurringIncomes.forEach(item => {
                addRecurringRow(item.amount, item.frequency);
            });
        } else {
            // Migration attempt: check for old keys if new array doesn't exist
            // These values are no longer in the HTML, but might be in old localStorage
            const oldQuarterly = Number(state.quarterlyContribution) || 0;
            const oldBiannual = Number(state.biannualContribution) || 0;
            const oldAnnual = Number(state.annualContribution) || 0;

            if (oldQuarterly > 0) addRecurringRow(oldQuarterly, 3);
            if (oldBiannual > 0) addRecurringRow(oldBiannual, 6);
            if (oldAnnual > 0) addRecurringRow(oldAnnual, 12);
        }

    } catch (e) {
        console.error("Error loading state", e);
    }
}

// Cargar estado al inicio
// Cargar estado al inicio
if (typeof document !== 'undefined') {
    loadState();

    // Calcular al cargar
    recalculate();

    // Opcional: recalcular automáticamente al cambiar inputs
    const inputs = document.querySelectorAll("#initialCapital, #monthlyContribution, #annualReturn, #inflationRate, #taxRate, #targetIncome, #withdrawalRate");
    inputs.forEach(input => {
        input.addEventListener("change", recalculate);
        input.addEventListener("keyup", recalculate);
    });
}

if (typeof module !== 'undefined') {
    module.exports = { calculateFinancialData, simulateYearsToTarget };
}
