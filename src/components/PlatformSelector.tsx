import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Facebook, Twitter, Copy } from "lucide-react";

interface PlatformSelectorProps {
  onSelect?: (platform: string) => void;
  isOpen?: boolean;
  platforms?: Array<"facebook" | "twitter" | "unicode">;
}

const PlatformSelector = ({
  onSelect = () => {},
  isOpen = true,
  platforms = ["facebook", "twitter", "unicode"],
}: PlatformSelectorProps) => {
  return (
    <div className="bg-card p-2 rounded-lg shadow-lg">
      <DropdownMenu open={isOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[200px]">
            Select Platform
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          {platforms.map((platform) => (
            <DropdownMenuItem
              key={platform}
              onClick={() => onSelect(platform)}
              className="flex items-center gap-2 cursor-pointer"
            >
              {platform === "facebook" && <Facebook className="h-4 w-4" />}
              {platform === "twitter" && <Twitter className="h-4 w-4" />}
              {platform === "unicode" && <Copy className="h-4 w-4" />}
              <span className="capitalize">{platform}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PlatformSelector;
