import { PaymentDetail } from "@/hooks/useResult";

export function calculatePayments(
  principal: number,
  annualInterestRate: number,
  months: number
): PaymentDetail[] {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const monthlyPayment = principal / months;

  let totalDebt = principal;
  let totalMoney = principal;

  const payments: PaymentDetail[] = [];

  for (let month = 1; month <= months; month++) {
    let name = `${month}. Taksit`;
    let monthlyInterestEarning = totalMoney * monthlyInterestRate;
    let monthlyPaymentWithoutInterest = monthlyPayment - monthlyInterestEarning;

    totalMoney += monthlyInterestEarning - monthlyPayment;
    totalDebt -= monthlyPayment;

    payments.push({
      name,
      monthlyInterestEarning: parseFloat(monthlyInterestEarning.toFixed(0)),
      monthlyPayment: parseFloat(monthlyPayment.toFixed(0)),
      monthlyPaymentWithoutInterest: parseFloat(
        monthlyPaymentWithoutInterest.toFixed(0)
      ),
      totalDebt: parseFloat(totalDebt.toFixed(0)),
      totalMoneyWithInterest: parseFloat(totalMoney.toFixed(0)),
    });
  }

  return payments;
}
