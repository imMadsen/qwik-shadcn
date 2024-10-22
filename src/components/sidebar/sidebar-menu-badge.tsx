import { component$, QwikJSX, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type SidebarMenuBadgeProps = QwikJSX.IntrinsicElements["div"];

export const SidebarMenuBadge = component$<SidebarMenuBadgeProps>(({ class: className, ...props }) =>
    <div
        data-sidebar="menu-badge"
        class={cn(
            "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
            "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
            "peer-data-[size=sm]/menu-button:top-1",
            "peer-data-[size=default]/menu-button:top-1.5",
            "peer-data-[size=lg]/menu-button:top-2.5",
            "group-data-[collapsible=icon]:hidden",
            className
        )}
        {...props}
    >
        <Slot />
    </div>
)