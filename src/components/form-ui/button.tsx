import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type Ref = HTMLButtonElement;
interface Props extends React.ComponentPropsWithoutRef<"button"> {}

export const Button = forwardRef<Ref, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "block h-[40px] w-full rounded-lg border border-white bg-blue-500 px-2.5 text-sm text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
