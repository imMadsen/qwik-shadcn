import { component$, Slot } from "@builder.io/qwik"
import { Modal as HeadlessModal } from "@qwik-ui/headless"
import { buttonVariants } from "../button/button"

export const SheetTrigger = component$(() => (
    <HeadlessModal.Trigger class={[buttonVariants({ variant: 'ghost' }), 'w-20']}>
        <Slot />
    </HeadlessModal.Trigger>
))