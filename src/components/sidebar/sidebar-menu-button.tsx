import { type PropsOf, type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"
import { useSidebar } from "./sidebar";
import { cva, type VariantProps } from "class-variance-authority";
import { Tooltip } from "@qwik-ui/headless";

const sidebarMenuButtonVariants = cva(
    "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                outline:
                    "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
            },
            size: {
                default: "h-8 text-sm",
                sm: "h-7 text-xs",
                lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)


type SidebarMenuButtonProps = QwikJSX.IntrinsicElements["button"]
    & VariantProps<typeof sidebarMenuButtonVariants>
    & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | PropsOf<typeof Tooltip.Panel>

};

export const SidebarMenuButton = component$<SidebarMenuButtonProps>(({ class: className, tooltip, variant, size, isActive, ...props }) => {
    const { isMobile, state } = useSidebar()

    const button = (
        <button
            data-sidebar="menu-button"
            data-size={size}
            data-active={isActive}
            class={cn(sidebarMenuButtonVariants({ variant, size }), className)}
            {...props}
        >
            <Slot />
        </button>
    )

    if (!tooltip) {
        return button
    }

    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip,
        }
    }

    return (
        <Tooltip.Root>
            <Tooltip.Trigger>{button}</Tooltip.Trigger>
            <Tooltip.Panel
                align="center"
                hidden={state.value !== "collapsed" || isMobile.value}
                {...tooltip}
            />
        </Tooltip.Root>
    )
});