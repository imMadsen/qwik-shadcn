import { component$, type QwikJSX } from "@builder.io/qwik";
import { Button } from "../button/button";
import { cn } from "@qwik-ui/utils";
import { useSidebar } from "./sidebar";
import { LuPanelLeft } from "@qwikest/icons/lucide";

type SidebarTriggerProps = QwikJSX.IntrinsicElements["button"];

export const SidebarTrigger = component$<SidebarTriggerProps>(({ class: className, ...props }) => {
    const { toggleSidebar$ } = useSidebar()

    return (
        <Button
            data-sidebar="trigger"
            variant="ghost"
            size="icon"
            class={cn("h-7 w-7", className)}
            onClick$={() => {
                toggleSidebar$()
            }}
            {...props}
        >
            <LuPanelLeft />
            <span class="sr-only">Toggle Sidebar</span>
        </Button>
    )
})
