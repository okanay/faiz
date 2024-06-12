"use client";

import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

interface PaymentDetail {
  name: string;
  monthlyInterestEarning: number;
  monthlyPayment: number;
  monthlyPaymentWithoutInterest: number;
  totalDebt: number;
  totalMoneyWithInterest: number;
}

const resultAtom = atom<PaymentDetail[]>([]);

const useResult = () => {
  const [result, setResult] = useAtom(resultAtom);
  const [index, setIndex] = useState<number>(0);
  const length = result.length;
  function next() {
    setIndex((prev) => (prev + 1) % result.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + result.length) % result.length);
  }

  useEffect(() => {
    setIndex(0);
  }, [result]);

  return { result, setResult, index, next, prev, length };
};

export default useResult;
export type { PaymentDetail };
