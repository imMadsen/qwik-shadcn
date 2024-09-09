import { QwikJSX, component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const AvatarImage = component$<QwikJSX.IntrinsicElements["img"]>(
  ({ class: className, ...props }) => (
    <img class={cn("aspect-square h-full w-full", className)} {...props} />
  )
);