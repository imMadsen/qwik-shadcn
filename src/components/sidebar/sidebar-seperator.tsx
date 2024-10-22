import { type QwikJSX, component$ } from "@builder.io/qwik"
import { Separator } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils"

type SidebarSeperatorProps = QwikJSX.IntrinsicElements["div"];

export const SidebarSeperator = component$<SidebarSeperatorProps>(({ class: className, ...props }) => (
    <Separator
        data-sidebar="separator"
        class={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
    />
))