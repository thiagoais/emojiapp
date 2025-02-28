import React from "react";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Search, X } from "lucide-react";
import { emojiCategories } from "@/data/emojis";
import { Button } from "./ui/button";

interface EmojiHeaderProps {
  onSearch?: (term: string) => void;
  onCategorySelect?: (category: string) => void;
  selectedCategory?: string;
  searchTerm?: string;
  showAllCategories?: boolean;
  onToggleView?: () => void;
}

const EmojiHeader = ({
  onSearch = () => {},
  onCategorySelect = () => {},
  selectedCategory = "smileys",
  searchTerm = "",
  showAllCategories = false,
  onToggleView = () => {},
}: EmojiHeaderProps) => {
  return (
    <div className="w-full bg-card border-b p-2 sticky top-0 z-10 rounded-t-lg">
      <div className="max-w-7xl mx-auto space-y-2">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-10 pr-10"
            placeholder="Search emojis..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
              onClick={() => onSearch("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* View Toggle Button */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleView}
            className="mb-1 text-xs h-7 px-2"
          >
            {showAllCategories ? "Tabs View" : "All Categories"}
          </Button>
        </div>

        {/* Category Tabs */}
        {!showAllCategories && (
          <Tabs
            defaultValue={selectedCategory}
            value={selectedCategory}
            onValueChange={onCategorySelect}
            className="w-full"
          >
            <TabsList className="w-full flex overflow-x-auto justify-start">
              {emojiCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`flex items-center gap-2 transition-all duration-300 ${selectedCategory === category.id ? "bg-primary text-primary-foreground shadow-lg scale-105" : ""}`}
                >
                  <span className="text-lg mr-1 transition-transform duration-300 hover:scale-125">
                    {category.icon}
                  </span>
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default EmojiHeader;
