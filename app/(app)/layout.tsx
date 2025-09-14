import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { children_Props } from "@/types";
import React from "react";
import AppSidebar from "./_components/app_sidebar";

const Layout = ({ children }: children_Props) => {
  return (
    <div>
      {" "}
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
