import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableBody = component$<QwikJSX.IntrinsicElements["tbody"]>(({ class: className, ...props }) => (
  <tbody
    class={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  >
    <Slot />
  </tbody>
));