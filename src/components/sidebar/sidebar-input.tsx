import { type QwikJSX, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"
import { Input } from "../input/input";

type SidebarInputProps = QwikJSX.IntrinsicElements["input"];

export const SidebarInput = component$<SidebarInputProps>(({ class: className, ...props }) => {
    return (
        <Input
            data-sidebar="input"
            class={cn(
                "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                className
            )}
            {...props}
        />
    )
})