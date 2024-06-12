import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type Ref = HTMLInputElement;
interface Props extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
        className
      )}
    />
  );
});
