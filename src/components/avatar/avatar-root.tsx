import { QwikJSX, Slot, component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const AvatarRoot = component$<QwikJSX.IntrinsicElements["div"]>(
  ({ class: className }) => (
    <div
      class={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
    >
      <Slot />
    </div>
  )
);