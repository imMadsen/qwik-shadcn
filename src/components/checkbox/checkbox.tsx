import { component$, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const Checkbox = component$<QwikJSX.IntrinsicElements["input"]>(({ class: className, ...props }) => (
    <input type="checkbox"
    class={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  />
))