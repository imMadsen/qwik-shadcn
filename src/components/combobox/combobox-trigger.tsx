import { type PropsOf, component$ } from '@builder.io/qwik';
import { Combobox as HeadlessCombobox } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';
import { LuChevronDown } from '@qwikest/icons/lucide';
  
export const ComboboxTrigger = component$<PropsOf<typeof HeadlessCombobox.Trigger>>(({ ...props }) => {
  return (
    <HeadlessCombobox.Trigger
      {...props}
      class={cn('group absolute right-0 h-6 w-6', props.class)}
    >
      <LuChevronDown class="stroke-foreground transition-transform duration-300 group-aria-expanded:-rotate-180" />
    </HeadlessCombobox.Trigger>
  );
});