import { type QwikJSX, component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { LuChevronRight } from "@qwikest/icons/lucide";

type BreadcrumbSeperatorProps = QwikJSX.IntrinsicElements["li"];

export const BreadcrumbSeperator = component$<BreadcrumbSeperatorProps>(({ class: className, ...props }) => (
    <li role="presentation" aria-hidden="true" class={cn("[&amp;>svg]:w-3.5 [&amp;>svg]:h-3.5 hidden md:block", className)} {...props}>
        <LuChevronRight />
    </li>
));