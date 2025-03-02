import React, { useState, useEffect } from "react";
import EmojiHeader from "./EmojiHeader";
import EmojiGrid from "./EmojiGrid";
import EmojiTextfield from "./EmojiTextfield";
import SEOContent from "./SEOContent";
import { Toaster } from "./ui/toaster";
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
          {/* Pass the emojiCollection state and setter to EmojiTextfield */}
          <EmojiTextfield
            value={emojiCollection}
            onChange={setEmojiCollection}
          />

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
      <SEOContent />
    </div>
  );
};

export default Home;
