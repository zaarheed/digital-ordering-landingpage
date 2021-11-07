export const calculate = (orders = 150, value = 18, _commission = 28) => {
    const commission = _commission / 100;
    const ordersPerYear = orders * 52;
    const orderValuePerYear = ordersPerYear * value;
    const commissionPerYear = orderValuePerYear * commission;

    const doCommissionPerYear = 0;

    const savings = Math.abs(commissionPerYear - doCommissionPerYear);

    return Math.floor(savings);
}