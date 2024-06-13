"use client";

import useResult, { PaymentDetail } from "@/hooks/useResult";
import { priceFormat } from "@/utils/price-format";
import { ReactNode } from "react";
import { Button } from "@/components/form-ui/button";

export const Result = () => {
  const { result, length, prev, index, next } = useResult();

  if (length === 0) return null;

  return (
    <div className="flex w-[320px] flex-col justify-start gap-4">
      <ResultContainer result={result} length={length} index={index} />
      <TotalInterest result={result} length={length} />
      <Pagination prev={prev} next={next} length={length} index={index} />
    </div>
  );
};

const ResultContainer = ({
  result,
  length,
  index,
}: {
  result: PaymentDetail[];
  length: number;
  index: number;
}) => {
  return (
    <div className="relative flex h-[240px] w-full items-end justify-end overflow-hidden rounded-lg border border-gray-300">
      <div
        className="absolute left-0 top-0 flex items-start justify-start transition-all duration-300 ease-in-out"
        style={{
          width: `${length * 320}px`,
          transform: `translateX(calc(-${(index * 100) / length}% + ${0}px))`,
        }}
      >
        {result.map((item, i) => (
          <ResultCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const ResultCard = ({ item }: { item: PaymentDetail }) => {
  return (
    <div className="flex h-[240px] w-[320px] flex-shrink-0 flex-col items-center justify-center gap-4 px-4 text-sm tracking-wider text-gray-500">
      <ResultRow title="Ay">{item.name}</ResultRow>
      <ResultRow title="Taksit Tutarı">
        {priceFormat(item.monthlyPayment)}
      </ResultRow>
      <ResultRow title="Faizli Taksit">
        {priceFormat(item.monthlyPaymentWithoutInterest)}
      </ResultRow>
      <ResultRow title="Faiz Kazancı">
        {priceFormat(item.monthlyInterestEarning)}
      </ResultRow>
      <ResultRow title="Ay Sonu Bakiye">
        {priceFormat(item.totalMoneyWithInterest)}
      </ResultRow>
    </div>
  );
};

const ResultRow = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <h4 className="text-blue-400">{title}</h4>
      <p className="rounded-lg border border-blue-950/20 px-2 py-1 text-blue-950">
        {children}
      </p>
    </div>
  );
};

const TotalInterest = ({
  result,
  length,
}: {
  result: PaymentDetail[];
  length: number;
}) => {
  return (
    <div className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm tracking-wider text-gray-500">
      <ResultRow title="Toplam Faiz Kazancı">
        {priceFormat(result[length - 1].totalMoneyWithInterest)}
      </ResultRow>
    </div>
  );
};

const Pagination = ({
  prev,
  next,
  length,
  index,
}: {
  prev: () => void;
  next: () => void;
  length: number;
  index: number;
}) => {
  const prevIndex = index === 0 ? length : index;
  const nextIndex = index + 2 > length ? 1 : index + 2;

  return (
    <div className="relative z-40 flex w-full justify-between gap-4">
      <Button onMouseDown={prev} className="relative">
        <span>Önceki</span>
        <span className="absolute -bottom-3.5 left-1/2 h-fit -translate-x-1/2 rounded-lg border border-blue-950/20 bg-white px-2 text-[0.64rem] text-blue-950">
          {prevIndex}. Taksit
        </span>
      </Button>
      <Button onMouseDown={next} className="relative">
        <span>Sonraki</span>
        <span className="absolute -bottom-3.5 left-1/2 h-fit -translate-x-1/2 rounded-lg border border-blue-950/20 bg-white px-2 text-[0.64rem] text-blue-950">
          {nextIndex}. Taksit
        </span>
      </Button>
    </div>
  );
};
