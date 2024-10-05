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
                "fixed z-50 w-full max-w-lg bg-transparent",
                className
            )}
            {...props}
        >
            <div class="grid gap-4 border bg-background p-6 shadow-lg sm:rounded-lg">
                <Slot />
            </div>
        </HeadlessModal.Panel>
    </>
    )
})