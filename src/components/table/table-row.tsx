import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableRow = component$<QwikJSX.IntrinsicElements["tr"]>(({ class: className, ...props }) => (
  <tr
    class={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  >
    <Slot />
  </tr>
));