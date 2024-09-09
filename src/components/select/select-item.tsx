import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";

export const SelectItem: typeof HeadlessSelect.Item = component$<
  PropsOf<typeof HeadlessSelect.Item>
>(({ ...props }) => {
  return (
    <HeadlessSelect.Item
      {...props}
      class={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class,
      )}
    >
      <Slot />
    </HeadlessSelect.Item>
  );
});