import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@qwik-ui/utils";

const alertVariants = cva(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive:
            "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

type AlertRootProps = QwikJSX.IntrinsicElements["div"] & VariantProps<typeof alertVariants>

export const AlertRoot = component$<AlertRootProps>(({ class: className, variant, ...props }) => (
    <div
        role="alert"
        class={cn(alertVariants({ variant }), className)}
        {...props}
    >
        <Slot />
    </div>
));