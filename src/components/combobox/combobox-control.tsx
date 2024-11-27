import { type PropsOf, Slot, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

export const ComboboxControl = component$<PropsOf<typeof HeadlessCombobox.Control>>((props) => {
  return (
    <HeadlessCombobox.Control
      {...props}
      class={cn('relative flex items-center rounded-base', props.class)}
    >
      <Slot />
    </HeadlessCombobox.Control>
  );
});