import { type PropsOf, component$, Slot } from "@builder.io/qwik"
import { Modal as HeadlessModal } from '@qwik-ui/headless';
import { cn } from "@qwik-ui/utils"

export const AlertDialogDescription = component$<PropsOf<typeof HeadlessModal.Description>>(({ class: className, ...props }) => (
    <HeadlessModal.Description
        class={cn("text-sm text-muted-foreground", className)}
        {...props}
    >
        <Slot />
    </HeadlessModal.Description>
))