import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type Ref = HTMLLabelElement;
interface Props extends React.ComponentPropsWithoutRef<"label"> {}

export const Label = forwardRef<Ref, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={twMerge(
          "mb-2 block text-sm font-medium text-gray-900",
          className
        )}
      >
        {children}
      </label>
    );
  }
);
