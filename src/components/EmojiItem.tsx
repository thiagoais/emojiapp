import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Plus } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface EmojiItemProps {
  emoji?: string;
  name?: string;
  platforms?: Array<"facebook" | "twitter" | "unicode">;
  onAddEmoji?: (emoji: string) => void;
}

const EmojiItem = ({
  emoji = "😊",
  name = "smiling face",
  platforms = ["facebook", "twitter", "unicode"],
  onAddEmoji = () => {},
}: EmojiItemProps) => {
  const { toast } = useToast();

  const handleAddEmoji = () => {
    onAddEmoji(emoji);
    toast({
      title: "Added!",
      description: `${emoji} added to collection`,
      duration: 2000,
    });
  };

  return (
    <Card
      className="w-full max-w-[80px] sm:max-w-[100px] h-auto bg-card p-2 sm:p-4 flex flex-col items-center justify-between transition-all hover:shadow-lg cursor-pointer group hover:bg-primary/5"
      onClick={handleAddEmoji}
    >
      <div className="text-4xl mb-2 transition-transform group-hover:scale-110 hover:animate-bounce">
        {emoji}
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={handleAddEmoji}
              >
                <Plus className="h-4 w-4" /> Add
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to collection</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
};

export default EmojiItem;
