import { PaymentDetail } from "@/hooks/useResult";

export function calculatePayments(
  principal: number,
  annualInterestRate: number,
  months: number,
  tax: boolean
): PaymentDetail[] {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const monthlyPayment = principal / months;

  let totalDebt = principal;
  let totalMoney = principal;

  const payments: PaymentDetail[] = [];

  let taxRate = 0;
  if (tax) {
    if (months >= 0 && months <= 6) {
      taxRate = 7.5 / 100;
    } else if (months > 6 && months < 12) {
      taxRate = 5 / 100;
    } else if (months >= 12) {
      taxRate = 2.5 / 100;
    }
  }

  for (let month = 1; month <= months; month++) {
    let name = `${month}. Taksit`;
    let monthlyInterestEarning = totalMoney * monthlyInterestRate;

    // Apply tax if tax is true
    if (tax) {
      let taxAmount = monthlyInterestEarning * taxRate;
      monthlyInterestEarning -= taxAmount;
    }

    let monthlyPaymentWithoutInterest = monthlyPayment - monthlyInterestEarning;

    totalMoney += monthlyInterestEarning - monthlyPayment;
    totalDebt -= monthlyPayment;

    payments.push({
      name,
      monthlyInterestEarning: parseFloat(monthlyInterestEarning.toFixed(2)),
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      monthlyPaymentWithoutInterest: parseFloat(
        monthlyPaymentWithoutInterest.toFixed(2)
      ),
      totalDebt: parseFloat(totalDebt.toFixed(2)),
      totalMoneyWithInterest: parseFloat(totalMoney.toFixed(2)),
    });
  }

  return payments;
}
