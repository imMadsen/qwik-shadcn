import { type PropsOf, component$, Slot } from "@builder.io/qwik"
import { buttonVariants } from "../button/button"
import { Modal as HeadlessModal } from '@qwik-ui/headless';
import { cn } from "@qwik-ui/utils"

export const AlertDialogCancel = component$<PropsOf<typeof HeadlessModal.Close>>(({ class: className, ...props }) => (
    <HeadlessModal.Close
        class={cn(
            buttonVariants({ variant: "outline" }),
            "mt-2 sm:mt-0",
            className
        )}
        {...props}
    >
        <Slot />
    </HeadlessModal.Close>
))