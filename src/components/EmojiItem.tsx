import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Facebook, Twitter, Copy } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface EmojiItemProps {
  emoji?: string;
  name?: string;
  platforms?: Array<"facebook" | "twitter" | "unicode">;
}

const EmojiItem = ({
  emoji = "😊",
  name = "smiling face",
  platforms = ["facebook", "twitter", "unicode"],
}: EmojiItemProps) => {
  const { toast } = useToast();

  const handleCopy = (platform: string) => {
    navigator.clipboard.writeText(emoji).then(() => {
      toast({
        title: "Copied!",
        description: `${emoji} copied in ${platform} format`,
        duration: 2000,
      });
    });
  };

  return (
    <Card className="w-[100px] h-auto bg-card p-4 flex flex-col items-center justify-between transition-all hover:shadow-lg cursor-pointer group">
      <div className="text-4xl mb-2 transition-transform group-hover:scale-110 hover:animate-bounce">
        {emoji}
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <TooltipProvider>
          {platforms.map((platform) => (
            <Tooltip key={platform}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => handleCopy(platform)}
                >
                  {platform === "facebook" && <Facebook className="h-4 w-4" />}
                  {platform === "twitter" && <Twitter className="h-4 w-4" />}
                  {platform === "unicode" && <Copy className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy {platform} format</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </Card>
  );
};

export default EmojiItem;
