import { component$, QwikJSX, Slot, } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type ContextMenuItem = QwikJSX.IntrinsicElements["div"] & {
    inset?: boolean;
}

export const ContextMenuItem = component$<ContextMenuItem>(({ class: className, inset, ...props }) => (
    <div
        role="menuitem"
        tabIndex={-1}
        class={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        <Slot />
    </div>
))