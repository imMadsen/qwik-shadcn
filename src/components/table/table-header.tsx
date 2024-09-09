import { component$, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableHeader = component$<QwikJSX.IntrinsicElements["thead"]>(({ class: className, ...props }) => (
  <thead class={cn("[&_tr]:border-b", className)} {...props} />
));