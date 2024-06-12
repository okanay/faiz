import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type Ref = HTMLTextAreaElement;
interface Props extends React.ComponentPropsWithoutRef<"textarea"> {}

export const TextArea = forwardRef<Ref, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        rows={1}
        className={twMerge("", className)}
      />
    );
  }
);
