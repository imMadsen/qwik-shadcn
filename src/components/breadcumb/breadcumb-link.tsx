import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { cn } from "@qwik-ui/utils";

type BreadcrumbLinkProps = PropsOf<typeof Link>;

export const BreadcrumbLink = component$<BreadcrumbLinkProps>(({ class: className, ...props }) => (
    <Link class={cn("transition-colors hover:text-foreground", className)} {...props}>
        <Slot />
    </Link>
));