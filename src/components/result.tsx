"use client";

import useResult from "@/hooks/useResult";
import { priceFormat } from "@/utils/price-format";
import { useState } from "react";
import { Button } from "@/components/form-ui/button";

export const Result = () => {
  const { result, length, prev, index, next } = useResult();

  if (length === 0) return null;

  return (
    <div className="relative h-[320px] w-[320px] overflow-hidden">
      <div
        className="absolute left-0 top-0 flex h-full gap-4 transition-all duration-300"
        style={{
          width: `${length * 100}%`,
          transform: `translateX(calc(-${(index * 100) / length}% - ${
            index * 16
          }px))`,
        }}
      >
        {result.map((item, i) => (
          <div
            key={item.name}
            className="flex h-fit w-full max-w-[320px] flex-shrink-0 flex-col gap-4 rounded-lg border border-gray-300 bg-gray-50 px-2 py-4 text-sm tracking-wider text-gray-500"
          >
            <div className="flex w-full justify-between">
              <h4 className="font-base text-blue-400">Ay</h4>
              <p>{item.name}</p>
            </div>
            <div className="flex w-full justify-between">
              <h4 className="font-base text-blue-400">Taksit Tutarı</h4>
              <p>{priceFormat(item.monthlyPayment)}</p>
            </div>
            <div className="flex w-full justify-between">
              <h4 className="font-base text-blue-400">
                Faiz Hariç Taksit Tutarı
              </h4>
              <p>{priceFormat(item.monthlyPaymentWithoutInterest)}</p>
            </div>
            <div className="flex w-full justify-between">
              <h4 className="font-base text-blue-400">Aylık Faiz Kazancı</h4>
              <p className="font-semibold underline underline-offset-4">
                {priceFormat(item.monthlyInterestEarning)}
              </p>
            </div>
            {i > 0 && (
              <div className="flex w-full justify-between">
                <h4 className="font-base text-blue-400">Kalan Borç</h4>
                <p className="font-semibold underline underline-offset-4">
                  {priceFormat(item.totalDebt)}
                </p>
              </div>
            )}
            <div className="flex w-full justify-between">
              <h4 className="font-base text-blue-400">Toplam Faiz Kazancı</h4>
              <p className="font-semibold underline underline-offset-4">
                {priceFormat(item.totalMoneyWithInterest - item.totalDebt)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`absolute ${
          index === 0 ? "bottom-[64px]" : "bottom-[22px]"
        } left-0 flex w-[320px] justify-between transition-all duration-300`}
      >
        <Button
          className="w-fit text-sm"
          onMouseDown={() => {
            prev();
          }}
        >
          Geri
        </Button>
        <Button
          className="w-fit text-sm"
          onMouseDown={() => {
            next();
          }}
        >
          İleri
        </Button>
      </div>
    </div>
  );
};

export default Result;
