import { type QwikJSX, component$, Slot } from "@builder.io/qwik"
import { buttonVariants } from "../button/button"
import { cn } from "@qwik-ui/utils"

export const AlertDialogAction = component$<QwikJSX.IntrinsicElements["button"]>(({ class: className, ...props }) => (
    <button
        class={cn(buttonVariants(), className)}
        {...props}
    >
        <Slot />
    </button>
))