import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const AlertTitle = component$<QwikJSX.IntrinsicElements["h5"]>(({ class: className, ...props }) => (
  <h5
    class={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    <Slot />
  </h5>
));