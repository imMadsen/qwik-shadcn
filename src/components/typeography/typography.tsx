import { component$, QwikJSX, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TypographyH1 = component$<QwikJSX.IntrinsicElements["h1"]>(({ class: className, ...props }) => {
    return (
        <h1 class={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
            <Slot />
        </h1>
    )
})

export const TypographyH2 = component$<QwikJSX.IntrinsicElements["h1"]>(({ class: className, ...props }) => {
    return (
        <h2 class={cn("text-3xl font-bold tracking-tight first:mt-0", className)} {...props}>
            <Slot />
        </h2>
    )
})

export const TypographyH3 = component$<QwikJSX.IntrinsicElements["h1"]>(({ class: className, ...props }) => {
    return (
        <h3 class={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}>
            <Slot />
        </h3>
    )
})

export const TypographyH4 = component$<QwikJSX.IntrinsicElements["h1"]>(({ class: className, ...props }) => {
    return (
        <h4 class={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}>
            <Slot />
        </h4>
    )
})

export const Paragraph = component$<QwikJSX.IntrinsicElements["p"]>(({ class: className, ...props }) => {
    return (
        <p class={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
            <Slot />
        </p>
    )
})

export const Heading = component$<QwikJSX.IntrinsicElements["h1"] & { as: "h1" | "h2" | "h3" | "h4" }>(({ as, ...props }) => {
    switch (as) {
        case "h1":
            return <TypographyH1 {...props}><Slot /></TypographyH1>;
        case "h2":
            return <TypographyH2 {...props}><Slot /></TypographyH2>;
        case "h3":
            return <TypographyH3 {...props}><Slot /></TypographyH3>;
        case "h4":
            return <TypographyH4 {...props}><Slot /></TypographyH4>;
    }
})