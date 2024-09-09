import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";

export const SelectLabel = component$<PropsOf<typeof HeadlessSelect.Label>>(
  ({ ...props }) => {
    return (
        <HeadlessSelect.Label
          {...props}
          class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
        >
          <Slot />
        </HeadlessSelect.Label>
    );
  },
);