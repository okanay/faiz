import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type Ref = HTMLDivElement;
interface Props extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const Wrapper = forwardRef<Ref, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={twMerge("group flex w-full flex-col gap-0.5", className)}
      >
        {children}
      </div>
    );
  }
);
