import { type PropsOf, Slot, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

export const ComboboxItemIndicator = component$<PropsOf<typeof HeadlessCombobox.ItemIndicator>>(
  ({ ...props }) => {
    return (
      <HeadlessCombobox.ItemIndicator {...props} class={cn('text-sm', props.class)}>
        <Slot />
      </HeadlessCombobox.ItemIndicator>
    );
  },
);
