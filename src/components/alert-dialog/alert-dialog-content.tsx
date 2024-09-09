import { type PropsOf, component$, Slot, useStylesScoped$ } from "@builder.io/qwik"
import { Modal as HeadlessModal } from '@qwik-ui/headless';
import { cn } from "@qwik-ui/utils"

export const AlertDialogContent = component$<PropsOf<typeof HeadlessModal.Panel>>(({ class: className, ...props }) => {
    useStylesScoped$(`
        .modal-backdrop::backdrop {
            /* changing background */
            background: rgba(0, 0, 0, 0.4);

            /* providing multiple filters */
            backdrop-filter: grayscale(90%) blur(10px);
        }
    `)

    return (<>
        <HeadlessModal.Panel
            class={cn(
                "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-100%] translate-y-[-150%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
                className
            )}
            {...props}
        >
            <Slot />
        </HeadlessModal.Panel>
    </>
    )
})