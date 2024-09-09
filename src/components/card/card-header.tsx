import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const CardHeader = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div
        class={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    >
        <Slot />
    </div>
));