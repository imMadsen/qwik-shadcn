import { component$, Slot } from "@builder.io/qwik";

export const TypographyH1 = component$(() => {
    return (
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            <Slot />
        </h1>
    )
})

export const TypographyH2 = component$(() => {
    return (
        <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <Slot />
        </h2>
    )
})

export const TypographyH3 = component$(() => {
    return (
        <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
            <Slot />
        </h3>
    )
})

export const TypographyH4 = component$(() => {
    return (
        <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
            <Slot />
        </h4>
    )
})

export const Paragraph = component$(() => {
    return (
        <p class="leading-7 [&:not(:first-child)]:mt-6">
            <Slot />
        </p>
    )
})

