import { component$, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const TableRoot = component$<QwikJSX.IntrinsicElements["table"]>(({ class: className, ...props }) => (
  <div class="relative w-full overflow-auto">
    <table
      class={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));