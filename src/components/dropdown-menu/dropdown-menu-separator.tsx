import { component$, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type DropdownMenuSeparatorProps = QwikJSX.IntrinsicElements["div"]

export const DropdownMenuSeparator = component$<DropdownMenuSeparatorProps>(({ class: className, ...props }) => (
    <div role="separator" aria-orientation="horizontal" class={cn("-mx-1 my-1 h-px bg-muted", className)} {...props}></div>
));