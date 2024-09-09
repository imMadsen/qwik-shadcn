import { QwikJSX, Slot, component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const AvatarFallback = component$<QwikJSX.IntrinsicElements["div"]>(
  ({ class: className, ...props }) => (
    <div
      class={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <span>
        <Slot />
      </span>
    </div>
  )
);