import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import { Modal as HeadlessModal } from "@qwik-ui/headless"
import { cn } from "@qwik-ui/utils";
import { LuX } from "@qwikest/icons/lucide";
import { cva, type VariantProps } from "class-variance-authority";

const sheetVariants = cva(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg",
    {
        variants: {
            side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                    "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 ml-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                    "inset-y-0 mr-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            },
        },
        defaultVariants: {
            side: "right",
        },
    }
)

type SheetPanelProps = PropsOf<typeof HeadlessModal.Panel> & VariantProps<typeof sheetVariants>;

export const SheetPanel = component$<SheetPanelProps>(({ class: className, side, ...props }) => (
    <HeadlessModal.Panel
        class={cn(sheetVariants({ side }), className)}
        {...props}
    >
        <Slot />
        <HeadlessModal.Close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <LuX class="h-4 w-4" />
            <span class="sr-only">Close</span>
        </HeadlessModal.Close>
    </HeadlessModal.Panel>
))
