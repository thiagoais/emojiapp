import React, { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Copy, Check, Facebook, Twitter, FileText } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface EmojiTextfieldProps {
  initialContent?: string;
}

type Platform = "facebook" | "twitter" | "unicode";

const EmojiTextfield = ({ initialContent = "" }: EmojiTextfieldProps) => {
  const [content, setContent] = useState(initialContent);
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("unicode");
  const { toast } = useToast();

  // Update content when initialContent changes
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      toast({
        title: "Copied!",
        description: `Emoji text copied to clipboard for ${selectedPlatform}`,
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const addEmoji = (emoji: string) => {
    setContent((prev) => prev + emoji);
  };

  const clearContent = () => {
    setContent("");
  };

  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4" />;
      case "twitter":
        return <Twitter className="h-4 w-4" />;
      case "unicode":
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="w-full bg-card border rounded-lg p-4 space-y-4 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <span className="text-xl">📋</span> Your Emoji Collection
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={clearContent}>
            Clear
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-1"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="unicode"
        value={selectedPlatform}
        onValueChange={(value) => setSelectedPlatform(value as Platform)}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="unicode" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Unicode
          </TabsTrigger>
          <TabsTrigger value="facebook" className="flex items-center gap-2">
            <Facebook className="h-4 w-4" /> Facebook
          </TabsTrigger>
          <TabsTrigger value="twitter" className="flex items-center gap-2">
            <Twitter className="h-4 w-4" /> Twitter
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedPlatform} className="mt-0">
          <div className="bg-muted/20 p-2 rounded-md mb-2 text-sm">
            <p className="flex items-center gap-2">
              {getPlatformIcon(selectedPlatform)}
              <span>
                Copying for{" "}
                <span className="font-semibold capitalize">
                  {selectedPlatform}
                </span>{" "}
                format
              </span>
            </p>
          </div>

          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your emojis will appear here..."
            className="min-h-[100px] text-lg"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { EmojiTextfield, type EmojiTextfieldProps };
export default EmojiTextfield;
