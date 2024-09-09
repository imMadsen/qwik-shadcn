import { cva } from "class-variance-authority" 
import { cn } from "@qwik-ui/utils"
import { component$, Slot, type QwikJSX } from "@builder.io/qwik"
 
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)
 
export const Label = component$<QwikJSX.IntrinsicElements["label"]>(({ class: className, ...props }) => (
  <label
    class={cn(labelVariants(), className)}
    {...props}
  >
    <Slot />
</label>
))