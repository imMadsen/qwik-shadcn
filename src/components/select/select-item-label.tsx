import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";

export const SelectItemLabel = component$<PropsOf<typeof HeadlessSelect.ItemLabel>>(
  ({ ...props }) => {
    return (
      <HeadlessSelect.ItemLabel {...props}>
        <Slot />
      </HeadlessSelect.ItemLabel>
    );
  },
);