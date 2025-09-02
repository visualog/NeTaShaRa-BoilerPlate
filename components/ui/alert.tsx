import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const alertVariants = cva(
  "w-full rounded-[--radius] border p-4 text-sm grid gap-2",
  {
    variants: {
      intent: {
        info: "border-muted bg-muted/40 text-foreground",
        warning: "border-[oklch(0.78_0.16_80)] bg-[oklch(0.96_0.03_80)]",
        error: "border-destructive bg-destructive/10 text-foreground",
        success: "border-[oklch(0.78_0.16_150)] bg-[oklch(0.96_0.03_150)]",
      },
      dense: { true: "p-3 text-xs", false: "" },
    },
    defaultVariants: { intent: "info", dense: false },
  }
);

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert({ className, intent, dense, ...props }: AlertProps) {
  return <div className={cn(alertVariants({ intent, dense }), className)} {...props} />;
}
