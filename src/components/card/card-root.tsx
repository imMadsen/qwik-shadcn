import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const CardRoot = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div
        class={cn(
            "rounded-xl border bg-card text-card-foreground shadow",
            className
        )}
        {...props}
    >
        <Slot />
    </div>
));