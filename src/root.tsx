import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useSidebarProvider } from "./components/sidebar/sidebar";
import "./global.css";
import { Combobox } from ".";

export default component$(() => {
  useSidebarProvider({ defaultOpen: true, open: true });

  const selected = useSignal<string[]>([]);
  
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    let i = 0;
    setInterval(() => {
      selected.value = [...selected.value, "Rasmus " + i]
      i++;
    }, 1000)
  })  

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        
      <Combobox.Root>
        <Combobox.Label>Personal Trainers</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.Trigger>
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Popover gutter={8}>
          {
            selected.value.map((i) => (
            <Combobox.Item key={i}>
              <Combobox.ItemLabel>{i}</Combobox.ItemLabel>
              <Combobox.ItemIndicator>
              </Combobox.ItemIndicator>
            </Combobox.Item>
            ))
          }
        </Combobox.Popover>
      </Combobox.Root>
      </body>
    </>
  );
})

