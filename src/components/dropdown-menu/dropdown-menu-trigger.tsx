import { component$, PropsOf, Slot } from '@builder.io/qwik';
import { Dropdown as HDropdown } from '@qwik-ui/headless';

type DropdownMenuTriggerProps = PropsOf<typeof HDropdown.Trigger>;

export const DropdownMenuTrigger = component$((props: DropdownMenuTriggerProps) => {
  return (
    <HDropdown.Trigger {...props}>
      <Slot />
    </HDropdown.Trigger>
  );
});
