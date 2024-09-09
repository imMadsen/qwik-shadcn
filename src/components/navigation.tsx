import { component$, Slot } from "@builder.io/qwik";

export const Navigation = component$(() => (
    <nav class="flex items-center gap-4 text-sm lg:gap-6">
        <Slot />
    </nav>
))