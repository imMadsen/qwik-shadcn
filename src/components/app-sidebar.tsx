import { component$ } from "@builder.io/qwik";
import * as Sidebar from "../components/sidebar";
import { LuCalendar, LuHome, LuInbox, LuSearch, LuSettings } from "@qwikest/icons/lucide";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: LuHome,
  },
  {
    title: "Inbox",
    url: "#",
    icon: LuInbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: LuCalendar,
  },
  {
    title: "Search",
    url: "#",
    icon: LuSearch,
  },
  {
    title: "Settings",
    url: "#",
    icon: LuSettings,
  },
]

export const AppSidebar = component$(() => (
  <Sidebar.Panel collapsible="icon">
    <Sidebar.Header />
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {items.map((item) => (
              <Sidebar.MenuItem key={item.title}>
                <Sidebar.MenuButton>
                    <item.icon />
                    <span>{item.title}</span>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            ))}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
    <Sidebar.Footer />
    <Sidebar.Rail />
  </Sidebar.Panel>
))