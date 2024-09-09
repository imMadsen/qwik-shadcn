import { component$, Slot, type QwikJSX } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type FormLabelProps = QwikJSX.IntrinsicElements["label"] & {
    error?: boolean;
}

export const FormLabel = component$<FormLabelProps>(({ class: className, error, ...props }) => (
    <label
    class={cn(error && "text-destructive", className)}
    {...props}
    >
        <Slot />
    </label>
));