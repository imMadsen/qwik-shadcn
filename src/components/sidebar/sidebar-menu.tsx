import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarMenuProps = QwikJSX.IntrinsicElements["ul"];

export const SidebarMenu = component$<SidebarMenuProps>(({ class: className, ...props }) => {
    return (
        <ul
            data-sidebar="menu"
            class={cn("flex w-full min-w-0 flex-col gap-1", className)}
            {...props}
        >
            <Slot />
        </ul>
    )
})