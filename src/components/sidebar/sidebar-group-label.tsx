import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarGroupLabelProps = QwikJSX.IntrinsicElements["div"];

export const SidebarGroupLabel = component$<SidebarGroupLabelProps>(({ class: className, ...props }) => {
    return (
        <div
            data-sidebar="group-label"
            class={cn(
                "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
                "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
                className
            )}
            {...props}
        >
            <Slot />
        </div>
    )
})