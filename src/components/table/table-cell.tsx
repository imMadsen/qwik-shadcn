import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableCell = component$<QwikJSX.IntrinsicElements["td"]>(({ class: className, ...props }) => (
  <td
    class={cn(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  >
    <Slot />
  </td>
));