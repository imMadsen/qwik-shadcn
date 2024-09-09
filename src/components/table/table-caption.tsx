import { component$, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableCaption = component$<QwikJSX.IntrinsicElements["caption"]>(({ class: className, ...props }) => (
  <caption
    class={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));