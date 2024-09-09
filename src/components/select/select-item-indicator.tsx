import { type PropsOf, component$ } from "@builder.io/qwik";
import { Select as HeadlessSelect } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import { LuCheck } from "@qwikest/icons/lucide";

export const SelectItemIndicator = component$<PropsOf<typeof HeadlessSelect.ItemIndicator>>(
  ({ ...props }) => {
    return (
      <span
        class={cn(
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
          props.class,
        )}
      >
        <HeadlessSelect.ItemIndicator>
          <LuCheck class="h-4 w-4" />
        </HeadlessSelect.ItemIndicator>
      </span>
    );
  },
);