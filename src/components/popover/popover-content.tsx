import { component$, type PropsOf, Slot } from '@builder.io/qwik';
import { Popover as HeadlessPopover } from '@qwik-ui/headless';
import { cn } from "@qwik-ui/utils"

export const PopoverContent = component$<PropsOf<typeof HeadlessPopover.Panel>>(({ class: className, ...props }) => (
    <HeadlessPopover.Panel
        class={cn(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
        )}
        {...props}
    >
        <Slot />
    </HeadlessPopover.Panel>
))