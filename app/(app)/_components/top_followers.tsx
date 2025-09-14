import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { top_Followers } from "@/constants";
import Image from "next/image";
import React from "react";

const TopFollowers = () => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Top Followers</SidebarGroupLabel>

        <SidebarMenu>
          {top_Followers.map((i, index) => (
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
                <p className="font-[100] text-xs">
                  {i.followers} {i.followers >= 1 ? "followers" : "Follower"}
                </p>
              </div>
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
};

export default TopFollowers;
