import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils";

type SidebarMenuSubProps = QwikJSX.IntrinsicElements["ul"];

export const SidebarMenuSub = component$<SidebarMenuSubProps>(({ class: className, ...props }) => {
    return (
        <ul
            data-sidebar="menu-sub"
            class={cn(
                "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
                "group-data-[collapsible=icon]:hidden",
                className
            )}
            {...props}
        >
            <Slot />
        </ul>
    )
})