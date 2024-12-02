import { type PropsOf } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { ComboboxItem } from './combobox-item';
import { ComboboxItemLabel } from './combobox-item-label';
import { cn } from '@qwik-ui/utils';

export const ComboboxRoot = (props: PropsOf<typeof HeadlessCombobox.Root>) => {
  return (
    <HeadlessCombobox.Root
      {...props}
      class={cn(
        'flex h-full w-48 flex-col overflow-hidden bg-popover text-popover-foreground',
        props.class,
      )}
      comboboxItemComponent={ComboboxItem}
      comboboxItemLabelComponent={ComboboxItemLabel}
    >
      {props.children}
    </HeadlessCombobox.Root>
  );
};
