import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import EmojiItem from "./EmojiItem";
import { TabsContent, Tabs } from "./ui/tabs";
import { emojis, emojiCategories } from "@/data/emojis";

interface EmojiGridProps {
  searchTerm?: string;
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
  showAllCategories?: boolean;
  onAddEmoji?: (emoji: string) => void;
}

const EmojiGrid = ({
  searchTerm = "",
  selectedCategory = "smileys",
  onCategorySelect = () => {},
  showAllCategories = false,
  onAddEmoji = () => {},
}: EmojiGridProps) => {
  // Filter emojis based on search term and selected category
  const filteredEmojis = emojis.filter((emoji) => {
    // Filter by search term
    const matchesSearch =
      searchTerm === "" ||
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    // Filter by category if not showing all categories
    const matchesCategory =
      showAllCategories ||
      selectedCategory === "all" ||
      emoji.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Get categories that have matching emojis when searching
  const categoriesWithMatches = searchTerm
    ? [...new Set(filteredEmojis.map((emoji) => emoji.category))]
    : [];

  if (showAllCategories) {
    return (
      <ScrollArea className="w-full h-[500px] sm:h-[600px] bg-muted/30 rounded-b-lg p-2 sm:p-3">
        {filteredEmojis.length > 0 ? (
          <div className="space-y-8">
            {emojiCategories.map((category) => {
              const categoryEmojis = filteredEmojis.filter(
                (emoji) => emoji.category === category.id,
              );

              if (categoryEmojis.length === 0) return null;

              const isHighlighted =
                searchTerm && categoriesWithMatches.includes(category.id);

              return (
                <div
                  key={category.id}
                  className={`mb-8 ${isHighlighted ? "bg-primary/10 p-4 rounded-lg transition-colors duration-300" : ""}`}
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-4">
                    {categoryEmojis.map((emoji, index) => (
                      <div
                        key={`${emoji.emoji}-${index}`}
                        className="transition-all duration-500 animate-fadeIn"
                        style={{
                          animationDelay: `${index * 30}ms`,
                          opacity: 0,
                          animation: "fadeIn 0.5s ease forwards",
                        }}
                      >
                        <EmojiItem
                          emoji={emoji.emoji}
                          name={emoji.name}
                          platforms={emoji.platforms}
                          onAddEmoji={onAddEmoji}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <p className="text-2xl mb-2">🔍</p>
            <h3 className="text-lg font-medium">No emojis found</h3>
            <p className="text-gray-500 mt-1">Try a different search term</p>
          </div>
        )}
      </ScrollArea>
    );
  }

  return (
    <Tabs
      value={selectedCategory}
      onValueChange={onCategorySelect}
      className="w-full"
    >
      {emojiCategories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <ScrollArea className="w-full h-[500px] sm:h-[600px] bg-muted/30 rounded-b-lg p-2 sm:p-3">
            {filteredEmojis.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-4 p-2 sm:p-4">
                {filteredEmojis
                  .filter((emoji) => emoji.category === category.id)
                  .map((emoji, index) => (
                    <div
                      key={`${emoji.emoji}-${index}`}
                      className="transition-all duration-500 animate-fadeIn"
                      style={{
                        animationDelay: `${index * 30}ms`,
                        opacity: 0,
                        animation: "fadeIn 0.5s ease forwards",
                      }}
                    >
                      <EmojiItem
                        emoji={emoji.emoji}
                        name={emoji.name}
                        platforms={emoji.platforms}
                        onAddEmoji={onAddEmoji}
                      />
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <p className="text-2xl mb-2">🔍</p>
                <h3 className="text-lg font-medium">No emojis found</h3>
                <p className="text-gray-500 mt-1">
                  Try a different search term or category
                </p>
              </div>
            )}
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default EmojiGrid;
