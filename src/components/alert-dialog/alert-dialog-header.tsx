import { type QwikJSX, component$, Slot } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

export const AlertDialogHeader = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div
        class={cn(
            "flex flex-col space-y-2 text-center sm:text-left",
            className
        )}
        {...props}
    >
        <Slot />
    </div>
))