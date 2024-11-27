import { type PropsOf, Slot, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

export const ComboboxLabel = component$<PropsOf<typeof HeadlessCombobox.Label>>(({ ...props }) => {
  return (
    <HeadlessCombobox.Label {...props} class={cn('text-sm', props.class)}>
      <Slot />
    </HeadlessCombobox.Label>
  );
});