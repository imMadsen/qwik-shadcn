import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type DropdownMenuShortcutProps = QwikJSX.IntrinsicElements["span"]

export const DropdownMenuShortcut = component$<DropdownMenuShortcutProps>(({ class: className, ...props }) => (
    <span
        class={cn("ml-auto text-xs tracking-widest opacity-60", className)}
        {...props}
    >
        <Slot />
    </span>
));