import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const FormMessage = component$<QwikJSX.IntrinsicElements["p"]>(({ class: className, ...props }) => (
    <p
        class={cn("text-sm font-medium text-destructive", className)}
        {...props}
    >
        <Slot />
    </p>
));