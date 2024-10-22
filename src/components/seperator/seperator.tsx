import { component$, type QwikJSX } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils";

type SeparatorProps = QwikJSX.IntrinsicElements["div"] & {
    orientation?: "horizontal" | "vertical"
}

export const Separator = component$<SeparatorProps>(({ class: className, orientation = "horizontal", ...props }) => (
    <div
      class={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);