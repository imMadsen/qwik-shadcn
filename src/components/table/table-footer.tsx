import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableFooter = component$<QwikJSX.IntrinsicElements["tfoot"]>(({ class: className, ...props }) => (
  <tfoot
    class={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  >
    <Slot />
  </tfoot>
));