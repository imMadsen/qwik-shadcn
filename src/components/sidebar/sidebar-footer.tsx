import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarFooterProps = QwikJSX.IntrinsicElements["div"];

export const SidebarFooter = component$<SidebarFooterProps>(({ class: className, ...props }) => {
    return (
        <div
            data-sidebar="footer"
            class={cn("flex flex-col gap-2 p-2", className)}
            {...props}
        >
            <Slot />
        </div>
    )
})