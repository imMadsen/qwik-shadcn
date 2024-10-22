import { type QRL, type Signal, $, createContextId, useContext, useContextProvider, useSignal, useVisibleTask$, useComputed$ } from "@builder.io/qwik"
import { useIsMobile } from "../../hooks/use-mobile"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
    state: Signal<"expanded" | "collapsed">
    open: Signal<boolean>
    openMobile: Signal<boolean>
    isMobile: Signal<boolean>
    toggleSidebar$: QRL<() => any>
}

const sidebarContext = createContextId<SidebarContext>("sidebar-context")

export function useSidebar() {
    const context = useContext(sidebarContext)
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.")
    }

    return context
}

export function useSidebarProvider({ defaultOpen = true, open: openProp = true }) {
    const isMobile = useIsMobile();
    const openMobile = useSignal(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const _open = useSignal(defaultOpen)
    const open = useSignal(openProp ?? _open.value);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
        track(() => open.value);
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    })

    // // Helper to toggle the sidebar.
    const toggleSidebar$ = $(() => {
        return isMobile.value
            ? openMobile.value = !open.value
            : open.value = !open.value
    })

    // Adds a keyboard shortcut to toggle the sidebar.
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault()
                toggleSidebar$()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    });

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = useComputed$(() => open.value ? "expanded" : "collapsed");

    const contextValue = {
        state,
        open,
        isMobile,
        openMobile,
        toggleSidebar$,
    }

    useContextProvider(sidebarContext, contextValue)
}