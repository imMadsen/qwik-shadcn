import { PropsOf } from '@builder.io/qwik';
import { Dropdown as HDropdown } from '@qwik-ui/headless';
import { DropdownMenuItem } from './dropdown-menu-item';

type DropdownMenuRootProps = PropsOf<typeof HDropdown.Root>;

export const DropdownMenuRoot = (props: DropdownMenuRootProps) => {
  return (
    <HDropdown.Root dropdownItemComponent={DropdownMenuItem} {...props}>
      {props.children}
    </HDropdown.Root>
  );
};