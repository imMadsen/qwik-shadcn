import { type PropsOf, Slot, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

type ComboboxPopoverProps = PropsOf<typeof HeadlessCombobox.Popover>;

export const ComboboxPopover: typeof HeadlessCombobox.Popover = component$<ComboboxPopoverProps>((props) => {
  return (
    <HeadlessCombobox.Popover
      {...props}
      class={cn('w-48 rounded-base border p-1 rounded-md bg-popover text-popover-foreground', props.class)}
    >
      <Slot />
    </HeadlessCombobox.Popover>
  );
});
