import { component$ } from "@builder.io/qwik";
import { AppSidebar } from "./components/app-sidebar";
import { useSidebarProvider } from "./components/sidebar/sidebar";
import * as Sidebar from "./components/sidebar";
import "./global.css";

export default component$(() => {
  useSidebarProvider({ defaultOpen: true, open: true });

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>

        <Sidebar.Root>
          <AppSidebar />
          <main>
            <Sidebar.Trigger />
          </main>
        </Sidebar.Root>
      </body>
    </>
  );
})

