import Logo from "@/components/shared/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import GlobalSearch from "./global_search";
import { ModeToggle } from "@/components/shared/mod_toggle";

const Navbar = () => {
  return (
    <div className="bg-sidebar flex justify-between items-center w-full">
      <Logo />
      <GlobalSearch />
      <div className="gap-2 items-center px-2">
        <SidebarTrigger />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
