import { component$, PropsOf, Slot } from '@builder.io/qwik';
import { Dropdown as HDropdown } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

type DropdownMenuItemProps = PropsOf<typeof HDropdown.Item>;

export const DropdownMenuItem: typeof HDropdown.Item = component$(({ class: className, ...props }: DropdownMenuItemProps) => {
  return (
    <HDropdown.Item class={cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", className)} {...props}>
      <Slot />
    </HDropdown.Item>
  );
});
