"use client";

import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type Ref = HTMLSelectElement;
interface Props extends React.ComponentPropsWithoutRef<"select"> {
  children?: React.ReactNode;
  placeholder?: string;
  topics: string[];
}

export const Select = forwardRef<Ref, Props>(
  ({ children, topics, className, placeholder = "Select", ...props }, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        defaultValue={""}
        className={twMerge(
          "block h-[40px] w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
          className
        )}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic} Taksit
          </option>
        ))}
      </select>
    );
  }
);
