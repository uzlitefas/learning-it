import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { top_Teachers } from "@/constants";
import Image from "next/image";
import React from "react";

const TopTeachers = () => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Top Teachers</SidebarGroupLabel>

        <SidebarMenu>
          {top_Teachers.map((i, index) => (
            <SidebarMenuButton key={index} className="flex items-center gap-2">
              <Image
                className="rounded-full"
                src={i.avatar}
                alt={i.name}
                width={30}
                height={30}
              />
              <div>
                <h1 className="font-medium"> {i.name}</h1>
                <p className="font-[100] text-xs">{i.status}</p>
              </div>
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
};

export default TopTeachers;
