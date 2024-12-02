import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarMenuItemProps = QwikJSX.IntrinsicElements["li"];

export const SidebarMenuItem = component$<SidebarMenuItemProps>(({ class: className, ...props }) => {
    return (
        <li
            data-sidebar="menu-item"
            class={cn("group/menu-item relative", className)}
            {...props}
        >
            <Slot />
        </li>
    )
})