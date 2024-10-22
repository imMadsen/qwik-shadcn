import { type QwikJSX, Slot, component$ } from "@builder.io/qwik"

type SidebarMenuSubItemProps = QwikJSX.IntrinsicElements["li"];

export const SidebarMenuSubItem = component$<SidebarMenuSubItemProps>(({ ...props }) => {
    return (
        <li
            {...props}
        >
            <Slot />
        </li>
    )
})