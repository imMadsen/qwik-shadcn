import { type PropsOf, Slot, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

type ComboboxItemProps = PropsOf<typeof HeadlessCombobox.Item>;

export const ComboboxItem: typeof HeadlessCombobox.Item = component$<ComboboxItemProps>(({ ...props }) => {
  return (
    <HeadlessCombobox.Item
      {...props}
      class={cn(
        'group flex justify-between gap-4 rounded-sm px-2 py-1.5 text-foreground aria-disabled:font-light aria-disabled:text-muted-foreground data-[highlighted]:cursor-pointer data-[highlighted]:bg-accent',
        props.class,
      )}
    >
      <Slot />
    </HeadlessCombobox.Item>
  );
});