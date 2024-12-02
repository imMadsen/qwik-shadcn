import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarGroupProps = QwikJSX.IntrinsicElements["div"];

export const SidebarGroup = component$<SidebarGroupProps>(({ class: className, ...props }) => {
    return (
        <div
            data-sidebar="group"
            class={cn("relative flex w-full min-w-0 flex-col p-2", className)}
            {...props}
        >
            <Slot />
        </div>
    )
})