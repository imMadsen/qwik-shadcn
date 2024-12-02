import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarGroupActionProps = QwikJSX.IntrinsicElements["button"];

export const SidebarGroupAction = component$<SidebarGroupActionProps>(({ class: className, ...props }) => {
    return (
        <button
            data-sidebar="group-action"
            class={cn(
                "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
                // Increases the hit area of the button on mobile.
                "after:absolute after:-inset-2 after:md:hidden",
                "group-data-[collapsible=icon]:hidden",
                className
            )}
            {...props}
        >
            <Slot />
        </button>
    )
})