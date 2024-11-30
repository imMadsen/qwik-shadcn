import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import { Dropdown as HDropdown } from '@qwik-ui/headless';
import { cn } from "@qwik-ui/utils";

type DropdownMenuPopoverProps = PropsOf<typeof HDropdown.Popover>;

export const DropdownMenuPopover: typeof HDropdown.Popover = component$(({ class: className, ...props }: DropdownMenuPopoverProps) => {
  return (
    <HDropdown.Popover class={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)} {...props}>
      <Slot />
    </HDropdown.Popover>
  );
});
