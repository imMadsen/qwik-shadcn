import { type CSSProperties, type QwikJSX, component$, useComputed$ } from "@builder.io/qwik"
import { cn } from "@qwik-ui/utils"
import { Skeleton } from "../skeleton/skeleton";

type SidebarMenuSkeletonProps = QwikJSX.IntrinsicElements["div"] & {
    showIcon?: boolean
};

export const SidebarMenuSkeleton = component$<SidebarMenuSkeletonProps>(({ class: className, showIcon, ...props }) => {
    // Random width between 50 to 90%.
    const width = useComputed$(() => {
        return `${Math.floor(Math.random() * 40) + 50}%`
    })

    return (
        <div
            data-sidebar="menu-skeleton"
            class={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
            {...props}
        >
            {showIcon && (
                <Skeleton
                    class="size-4 rounded-md"
                    data-sidebar="menu-skeleton-icon"
                />
            )}
            <Skeleton
                class="h-4 flex-1 max-w-[--skeleton-width]"
                data-sidebar="menu-skeleton-text"
                style={
                    {
                        "--skeleton-width": width,
                    } as unknown as CSSProperties
                }
            />
        </div>
    )
})