import { type QwikJSX, component$, Slot } from "@builder.io/qwik";

type BreadcrumbRootProps = QwikJSX.IntrinsicElements["nav"];

export const BreadcrumbRoot = component$<BreadcrumbRootProps>((props) => (
    <nav aria-label="breadcrumb" {...props}>
        <Slot />
    </nav>
));