import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[--radius] text-sm font-medium transition-colors outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        outline: "border border-muted-foreground/30 text-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-muted/60",
        destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-6 text-base",
      },
      loading: {
        true: "pointer-events-none opacity-70",
        false: "",
      },
    },
    compoundVariants: [
      { variant: "outline", size: "lg", class: "border-2" },
      { variant: ["default", "destructive"], size: "sm", class: "tracking-tight" },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className: userClassName, variant, size, loading, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        buttonVariants({ variant, size, loading }),
        userClassName,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";