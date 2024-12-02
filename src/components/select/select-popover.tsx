import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";

export const SelectPopover: typeof HeadlessSelect.Popover = component$<
  PropsOf<typeof HeadlessSelect.Popover>
>(({ ...props }) => {
  return (
    <HeadlessSelect.Popover
      {...props}
      class={cn(
        "absolute data-[open]:animate-in data-[closing]:animate-out data-[closing]:fade-out-0 data-[open]:fade-in-0 data-[closing]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 w-full min-w-[8rem] max-w-[15rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        props.class,
      )}
    >
      <Slot />
    </HeadlessSelect.Popover>
  );
});