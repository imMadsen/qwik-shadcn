import { useSignal, useVisibleTask$ } from "@builder.io/qwik"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
    const isMobile = useSignal<boolean>(false)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        const onChange = () => {
            isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
        }
        mql.addEventListener("change", onChange)
        isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
        return () => mql.removeEventListener("change", onChange)
    })

    return isMobile;
}