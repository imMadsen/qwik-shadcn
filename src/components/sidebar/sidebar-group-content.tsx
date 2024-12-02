import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarGroupContentProps = QwikJSX.IntrinsicElements["div"];

export const SidebarGroupContent = component$<SidebarGroupContentProps>(({ class: className, ...props }) => {
    return (
        <div
            data-sidebar="group-content"
            class={cn("w-full text-sm", className)}
            {...props}
        >
            <Slot />
        </div>
    )
})