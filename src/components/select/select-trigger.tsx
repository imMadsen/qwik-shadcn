import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import { LuChevronDown } from "@qwikest/icons/lucide";

export const SelectTrigger = component$<PropsOf<typeof HeadlessSelect.Trigger>>(
  ({ ...props }) => {
    return (
      <HeadlessSelect.Trigger
        {...props}
        class={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          props.class,
        )}
      >
        <Slot />
        <LuChevronDown class="h-4 w-4 opacity-50" />
      </HeadlessSelect.Trigger>
    );
  },
);