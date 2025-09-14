import Logo from "@/components/shared/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import GlobalSearch from "./global_search";
import { ModeToggle } from "@/components/shared/mod_toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-sidebar flex justify-between items-center w-full">
      <Logo />
      <GlobalSearch />
      <div className="gap-1 items-center flex px-2">
        <SidebarTrigger />
        <ModeToggle />
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant={"ghost"}>Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
