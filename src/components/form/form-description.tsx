import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const FormDescription = component$<QwikJSX.IntrinsicElements["p"]>(({ class: className, ...props }) => (
    <p
        class={cn("text-sm text-muted-foreground", className)}
        {...props}
    >
        <Slot />
    </p>
));