import { type QwikJSX, component$, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type BreadcrumbListProps = QwikJSX.IntrinsicElements["ol"];

export const BreadcrumbList = component$<BreadcrumbListProps>(({ class: className }) => (
    <ol class={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className)}>
        <Slot />
    </ol>
));