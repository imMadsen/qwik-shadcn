import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarHeaderProps = QwikJSX.IntrinsicElements["div"];

export const SidebarHeader = component$<SidebarHeaderProps>(({ class: className, ...props }) => {
    return (
        <div
            data-sidebar="header"
            class={cn("flex flex-col gap-2 p-2", className)}
            {...props}
        >
            <Slot />
        </div>
    )
})