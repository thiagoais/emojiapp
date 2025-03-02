import React, { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Copy, Trash } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface EmojiTextfieldProps {
  initialContent?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const EmojiTextfield = ({
  initialContent = "",
  value,
  onChange,
}: EmojiTextfieldProps) => {
  // Use either controlled (value/onChange) or uncontrolled (internal state) pattern
  const isControlled = value !== undefined && onChange !== undefined;
  const [content, setContent] = useState(initialContent);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Update content when initialContent changes (for uncontrolled mode)
  useEffect(() => {
    if (!isControlled) {
      setContent(initialContent);
    }
  }, [initialContent, isControlled]);

  const handleCopy = () => {
    const textToCopy = isControlled ? value : content;
    navigator.clipboard.writeText(textToCopy || "").then(() => {
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Emoji text copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const clearContent = () => {
    if (isControlled) {
      onChange?.("");
    } else {
      setContent("");
    }
    toast({
      title: "Cleared!",
      description: "Emoji collection has been cleared",
      duration: 2000,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isControlled) {
      onChange?.(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  return (
    <div className="w-full h-full bg-card border rounded-lg p-3 space-y-3 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="w-full bg-card border rounded-lg p-2 shadow-sm">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium flex items-center gap-1">
            <span className="text-base">📋</span> Collection
          </h3>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={clearContent}
            >
              <Trash className="h-3.5 w-3.5 mr-1" /> Clear
            </Button>
            <Button
              variant="default"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={handleCopy}
            >
              <Copy className="h-3.5 w-3.5 mr-1" />
              Copy
            </Button>
          </div>
        </div>
        <Textarea
          value={isControlled ? value : content}
          onChange={handleChange}
          className="min-h-[40px] text-lg resize-none"
          placeholder="Your emojis will appear here..."
        />
      </div>
    </div>
  );
};

export { EmojiTextfield, type EmojiTextfieldProps };
export default EmojiTextfield;
