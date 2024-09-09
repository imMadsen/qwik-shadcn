import { type QwikJSX, component$, Slot } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

export const AlertDialogFooter = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div
        class={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    >
        <Slot />
    </div>
))