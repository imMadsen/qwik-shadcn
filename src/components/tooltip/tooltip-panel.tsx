import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import { Tooltip } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";

export const TooltipPanel = component$<PropsOf<typeof Tooltip.Panel>>(({ class: className, ...props }) => (
    <Tooltip.Panel class={cn("overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)} {...props}>
        <Slot />
    </Tooltip.Panel>
));