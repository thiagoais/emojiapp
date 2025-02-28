import React, { useState, useEffect } from "react";
import EmojiHeader from "./EmojiHeader";
import EmojiGrid from "./EmojiGrid";
import EmojiTextfield from "./EmojiTextfield";
import { Toaster } from "./ui/toaster";
import { Textarea } from "./ui/textarea";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/lib/theme-provider";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("smileys");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [emojiCollection, setEmojiCollection] = useState("");
  const { theme, setTheme } = useTheme();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleView = () => {
    setShowAllCategories(!showAllCategories);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleAddEmoji = (emoji: string) => {
    setEmojiCollection((prev) => prev + emoji);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-2 px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground animate-fadeIn">
            Emoji Selector
          </h1>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex flex-col space-y-2">
          {/* Collection at the top */}
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
                  onClick={() => setEmojiCollection("")}
                >
                  Clear
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={() => navigator.clipboard.writeText(emojiCollection)}
                >
                  Copy
                </Button>
              </div>
            </div>
            <Textarea
              value={emojiCollection}
              onChange={(e) => setEmojiCollection(e.target.value)}
              className="min-h-[40px] text-lg resize-none"
              placeholder="Your emojis will appear here..."
            />
          </div>

          {/* Search and categories */}
          <EmojiHeader
            onSearch={handleSearch}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            showAllCategories={showAllCategories}
            onToggleView={toggleView}
          />

          {/* Emoji grid */}
          <div className="mt-1">
            <EmojiGrid
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
              showAllCategories={showAllCategories}
              onAddEmoji={handleAddEmoji}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
