import { PropsOf } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";
import { SelectItem } from "./select-item";
import { SelectItemLabel } from "./select-item-label";

export const SelectRoot = (props: PropsOf<typeof HeadlessSelect.Root>) => (
    <HeadlessSelect.Root
      {...props}
      selectItemComponent={SelectItem}
      selectItemLabelComponent={SelectItemLabel}
    />
  );