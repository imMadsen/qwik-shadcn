import { type QwikJSX, component$, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type BreadcrumbItemProps = QwikJSX.IntrinsicElements["li"];

export const BreadcrumbItem = component$<BreadcrumbItemProps>(({ class: className, ...props }) => (
    <li class={cn("items-center gap-1.5 hidden md:block", className)} {...props}>
        <Slot />
    </li>
));