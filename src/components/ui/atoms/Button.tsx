import { VariantProps, cva, cx } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva(
  "transition-all text-center p-4 text-2xl rounded-md font-extrabold",
  {
    variants: {
      intent: {
        teal: "bg-teal-300 hover:bg-teal-400",
        orange: "bg-orange-600 hover:bg-orange-700",
        sky: "bg-sky-600 hover:bg-sky-700",
      },
    },
    defaultVariants: {
      intent: "teal",
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    label: string;
  };

export function Button({ label, intent, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cx(
        button({ intent }),
        label === "reset" || label === "equal" ? "col-span-2" : ""
      )}
      {...props}
    >
      {children}
    </button>
  );
}
