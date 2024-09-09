import { component$, type QwikJSX } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"
 
const Input = component$<QwikJSX.IntrinsicElements["input"]>(({ class: className, type, ...props }) => {
    return (
      <input
        type={type}
        class={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)

export { Input } 