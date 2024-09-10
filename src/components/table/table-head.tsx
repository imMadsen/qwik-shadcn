import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableHead = component$<QwikJSX.IntrinsicElements["th"]>(({ class: className, ...props }) => (
  <th
    class={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  >
    <Slot />
  </th>
));