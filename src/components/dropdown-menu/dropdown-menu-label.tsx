import { component$, Slot, type QwikJSX } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type DropdownMenuLabelProps = QwikJSX.IntrinsicElements["div"] & {
    inset?: boolean;
}

export const DropdownMenuLabel = component$<DropdownMenuLabelProps>(({ inset, class: className, ...props }) => (
    <div
        class={cn(
            "px-2 py-1.5 text-sm font-semibold",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        <Slot />
    </div>
))