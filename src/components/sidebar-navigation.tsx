import { component$ } from "@builder.io/qwik"

export const SidebarNavigation = component$(() => (
    <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <div dir="ltr" class="relative overflow-hidden h-full py-6 pr-6 lg:py-8" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;">
            <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width: 100%; display: table;">
                    <div class="w-full"><div class="pb-4">
                        <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
                        <div class="grid grid-flow-row auto-rows-max text-sm">
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs">Introduction</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/installation">Installation</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components-json">components.json</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/theming">Theming</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/dark-mode">Dark mode</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/cli">CLI</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/typography">Typography</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/figma">Figma</a>
                            <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/changelog">Changelog</a>
                        </div>
                    </div>
                        <div class="pb-4">
                            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                            <div class="grid grid-flow-row auto-rows-max text-sm">
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline font-medium text-foreground" target="" rel="" href="/docs/components/accordion">Accordion</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/alert">Alert</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/alert-dialog">Alert Dialog</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/aspect-ratio">Aspect Ratio</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/avatar">Avatar</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/badge">Badge</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/breadcrumb">Breadcrumb</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/button">Button</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/calendar">Calendar</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/card">Card</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/carousel">Carousel</a>
                                <a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground" target="" rel="" href="/docs/components/chart">
                                    Chart<span class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
))