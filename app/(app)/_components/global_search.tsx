import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="flex m-1 h-10 items-center border border-foreground-300 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-gray-600 bg-background transition-shadow">
      <input
        type="search"
        placeholder="Search somethink ..."
        className="flex-grow px-4 py-2 focus:outline-none text-gray-700 dark:placeholder-gray-300"
      />
      <Button
        variant={"ghost"}
        className="hover:bg-transparent hover:scale-110 bg-transparent text-foreground transition flex items-center justify-center"
      >
        <Search />
      </Button>
    </div>
  );
};

export default GlobalSearch;
