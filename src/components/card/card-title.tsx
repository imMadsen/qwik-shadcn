import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const CardTitle = component$<QwikJSX.IntrinsicElements["h3"]>(({ class: className, ...props }) => (
    <h3
        class={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
    >
        <Slot />
    </h3>
));