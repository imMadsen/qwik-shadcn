import { type CSSProperties, type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"


const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_ICON = "3rem"

type SidebarContentProps = QwikJSX.IntrinsicElements["div"];

export const SidebarRoot = component$<SidebarContentProps>(({ class: className, ...props }) => {
    return (
        <div
            style={
                {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                } as unknown as CSSProperties
            }
            class={cn(
                "group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar",
                className
            )}
            {...props}
        >
            <Slot />
        </div>
    )
})