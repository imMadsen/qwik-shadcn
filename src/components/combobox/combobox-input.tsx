import { type PropsOf, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

export const ComboboxInput = component$<PropsOf<typeof HeadlessCombobox.Input>>((props) => {
  return (
    <HeadlessCombobox.Input
      {...props}
      class={cn(
        'flex h-10 w-full rounded-md border border-input py-3 pl-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )}
    />
  );
});