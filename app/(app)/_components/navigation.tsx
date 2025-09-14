import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { navigation_link } from "@/constants";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>

      <SidebarMenu>
        {navigation_link.map((i) => (
          <Link href={i.route} key={i.route}>
            <SidebarMenuButton className="flex items-center">
              <i.icon /> {i.label}
            </SidebarMenuButton>{" "}
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default Navigation;
