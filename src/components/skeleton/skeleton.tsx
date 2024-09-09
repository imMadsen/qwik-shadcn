import { component$, type QwikJSX } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

export const Skeleton = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
    <div
        class={cn("animate-pulse rounded-md bg-primary/10", className)}
        {...props}
    />
))