"use client";

import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";

type Ref = HTMLInputElement;
interface Props extends CurrencyInputProps {}

export const InputCurrency = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <CurrencyInput
        {...props}
        ref={ref}
        decimalSeparator=","
        groupSeparator="."
        className={twMerge(
          "block h-[40px] w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
          className
        )}
      />
    );
  }
);
