import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const paragraph = cva("tracking-wide", {
  variants: {
    intent: {
      dark: "text-gray-800",
      light: "text-gray-100",
    },
    size: {
      normal: "text-base",
      large: "text-lg",
      "extra-large": "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    intent: "dark",
    size: "extra-large",
  },
});

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof paragraph> & {};

export function Paragraph({
  className,
  intent,
  size,
  weight,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p className={paragraph({ intent, size, className, weight })} {...props}>
      {children}
    </p>
  );
}
