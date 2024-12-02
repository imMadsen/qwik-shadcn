import { type PropsOf, Slot, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

export const ComboboxItemLabel = component$<PropsOf<typeof HeadlessCombobox.ItemLabel>>(
  ({ ...props }) => {
    return (
      <HeadlessCombobox.ItemLabel {...props} class={cn('text-sm', props.class)}>
        <Slot />
      </HeadlessCombobox.ItemLabel>
    );
  },
);
