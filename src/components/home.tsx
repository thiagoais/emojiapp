import React, { useState, useEffect } from "react";
import EmojiHeader from "./EmojiHeader";
import EmojiGrid from "./EmojiGrid";
import EmojiTextfield from "./EmojiTextfield";
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
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground text-center animate-fadeIn">
            Emoji Selector & Copier
          </h1>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="space-y-6">
          <EmojiHeader
            onSearch={handleSearch}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            showAllCategories={showAllCategories}
            onToggleView={toggleView}
          />
          <EmojiTextfield
            initialContent={emojiCollection}
            key={emojiCollection}
          />
          <EmojiGrid
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            showAllCategories={showAllCategories}
            onAddEmoji={handleAddEmoji}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
