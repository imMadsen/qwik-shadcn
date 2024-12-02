import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarContentProps = QwikJSX.IntrinsicElements["div"];

export const SidebarContent = component$<SidebarContentProps>(({ class: className, ...props }) => {
    return (
        <div
            data-sidebar="content"
            class={cn(
                "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
                className
            )}
            {...props}
        >
            <Slot />
        </div>
    )
})