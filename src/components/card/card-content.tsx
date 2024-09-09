import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const CardContent = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div class={cn("p-6 pt-0", className)} {...props} >
        <Slot />
    </div>
));