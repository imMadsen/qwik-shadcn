import { component$, Slot } from "@builder.io/qwik"
import { Modal } from "@qwik-ui/headless"
import { buttonVariants } from "../button/button"

export const SheetTrigger = component$(() => (
    <Modal.Trigger class={[buttonVariants({ variant: 'ghost' }), 'w-20']}>
        <Slot />
    </Modal.Trigger>
))