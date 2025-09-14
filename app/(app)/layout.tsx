import { SidebarProvider } from "@/components/ui/sidebar";
import { children_Props } from "@/types";
import React from "react";
import AppSidebar from "./_components/app_sidebar";
import Navbar from "./_components/navbar";

const Layout = ({ children }: children_Props) => {
  return (
    <div>
      {" "}
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
