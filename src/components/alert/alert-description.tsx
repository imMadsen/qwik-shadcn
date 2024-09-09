import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const AlertDescription = component$<QwikJSX.IntrinsicElements["div"]>(({ class: className, ...props }) => (
  <div
    class={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  >
    <Slot />
  </div>
));