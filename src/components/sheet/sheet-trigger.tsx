import { component$, type PropsOf, Slot } from "@builder.io/qwik"
import { Modal as HeadlessModal } from "@qwik-ui/headless"
import { cn } from "@qwik-ui/utils"
import { buttonVariants } from "../button/button"

export const SheetTrigger = component$<PropsOf<typeof HeadlessModal.Trigger>>(({ class: className }) => (
    <HeadlessModal.Trigger class={cn(buttonVariants({ variant: 'ghost' }), 'w-20', className)}>
        <Slot />
    </HeadlessModal.Trigger>
))