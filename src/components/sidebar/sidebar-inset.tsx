import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"

type SidebarInsetProps = QwikJSX.IntrinsicElements["main"];

export const SidebarInset = component$<SidebarInsetProps>(({ class: className, ...props }) => {
    return (
        <main
            class={cn(
                "relative flex min-h-svh flex-1 flex-col bg-background",
                "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
                className
            )}
            {...props}
        >
            <Slot />
        </main>
    )
})