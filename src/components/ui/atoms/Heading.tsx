import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const heading = cva("font-bold", {
  variants: {
    intent: {
      dark: "text-gray-800",
      light: "text-gray-100",
    },
    size: {
      normal: "text-xl",
      large: "text-5xl",
    },
  },
  compoundVariants: [
    {
      intent: "dark",
      size: "normal",
    },
  ],
  defaultVariants: {
    intent: "dark",
    size: "large",
  },
});

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof heading> & {};

export function Heading({
  className,
  intent,
  size,
  children,
  ...props
}: HeadingProps) {
  return (
    <h1 className={heading({ intent, size, className })} {...props}>
      {children}
    </h1>
  );
}
