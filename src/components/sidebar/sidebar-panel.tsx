import { component$, Slot, useSignal, useVisibleTask$, type CSSProperties, type QwikJSX } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"
import { useSidebar } from "./sidebar"
import * as Sheet from "../sheet";

const SIDEBAR_WIDTH_MOBILE = "18rem"

type SidebarPanelProps = QwikJSX.IntrinsicElements["div"] & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
}

export const SidebarPanel = component$<SidebarPanelProps>(
    (
        {
            side = "left",
            variant = "sidebar",
            collapsible = "offcanvas",
            class: className,
            ...props
        }
    ) => {
        const { isMobile, state, openMobile } = useSidebar()

        if (collapsible === "none") {
            return (
                <div
                    class={cn(
                        "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
                        className
                    )}
                    {...props}
                >
                    <Slot />
                </div>
            )
        }

        if (isMobile.value) {
            return (
                <Sheet.Root bind:show={openMobile}>
                    <Sheet.Panel
                        side="left"
                        data-sidebar="sidebar"
                        data-mobile="true"
                        class="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
                        style={
                            {
                                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                            } as unknown as CSSProperties
                        }
                    >
                        <div class="flex h-full w-full flex-col">
                            <Slot />
                        </div>
                    </Sheet.Panel>
                </Sheet.Root>
            )
        }

        return (
            <div
                class="group peer hidden md:block"
                data-state={state.value}
                data-collapsible={state.value === "collapsed" ? collapsible : ""}
                data-variant={variant}
                data-side={side}
            >
                {/* This is what handles the sidebar gap on desktop */}
                <div
                    class={cn(
                        "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                        "group-data-[collapsible=offcanvas]:w-0",
                        "group-data-[side=right]:rotate-180",
                        variant === "floating" || variant === "inset"
                            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
                    )}
                />
                <div
                    class={cn(
                        "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                        side === "left"
                            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                        // Adjust the padding for floating and inset variants.
                        variant === "floating" || variant === "inset"
                            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                        className
                    )}
                    {...props}
                >
                    <div
                        data-sidebar="sidebar"
                        class="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
                    >
                        <Slot />
                    </div>
                </div>
            </div>
        )
    }
)
