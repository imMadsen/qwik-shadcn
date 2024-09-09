import { component$, QwikJSX, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const Link = component$<QwikJSX.IntrinsicElements["a"]>(({ class: className, href, ...props }) => {
    return (
        <a class={cn("transition-colors hover:text-foreground/80 text-foreground/60", className as string)} href={href} {...props}>
            <Slot />
        </a>
    )
})