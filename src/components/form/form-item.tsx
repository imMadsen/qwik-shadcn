import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const FormItem = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div class={cn("space-y-2", className)} {...props}>
        <Slot />
    </div>
));