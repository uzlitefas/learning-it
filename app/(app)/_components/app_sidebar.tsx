import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import UserDropdown from "./user_dropdown";
import Navigation from "./navigation";
import TopFollowers from "./top_followers";
import TopTeachers from "./top_teachers";

const AppSidebar = () => {
  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarContent className="overflow-clip">
          <Navigation />
          <SidebarSeparator />
          <TopFollowers />
          <SidebarSeparator />
          <TopTeachers />
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
          <UserDropdown />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
