import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const alertVariants = cva(
  "w-full rounded-[--radius] border p-4 text-sm grid gap-2",
  {
    variants: {
      intent: {
        info: "border-muted bg-muted/40 text-foreground",
        warning: "border-amber-7 bg-amber-3 text-amber-12",
        error: "border-destructive bg-destructive/10 text-foreground",
        success: "border-green-7 bg-green-3 text-green-12",
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
