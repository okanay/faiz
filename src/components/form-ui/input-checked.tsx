import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Ref = HTMLInputElement;
interface Props extends React.ComponentPropsWithoutRef<"input"> {
  children: React.ReactNode;
}

const InputChecked = forwardRef<Ref, Props>(
  ({ className, children, name, ...props }, ref) => {
    return (
      <div className="me-4 flex items-center">
        <input
          ref={ref}
          {...props}
          type="radio"
          className={twMerge(
            "h-4 w-4 border border-gray-300 bg-gray-50 text-blue-600 accent-blue-500 focus:ring-0",
            className
          )}
        />
        <label
          htmlFor={name}
          className="ms-2 text-sm font-medium text-gray-900"
        >
          {children}
        </label>
      </div>
    );
  }
);

export default InputChecked;
