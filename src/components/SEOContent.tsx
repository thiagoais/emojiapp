import React from "react";

const SEOContent = () => {
  return (
    <section
      id="seo-content"
      className="mt-10 p-6 bg-secondary text-secondary-foreground rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        Welcome to Emoji Party
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        The Ultimate Emoji Search & Copy Tool! Need the perfect emoji for your
        message, social media post, or conversation? Emoji Party makes it easy
        to search, select, and copy all the emojis you need—instantly and
        hassle-free!
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        How It Works
      </h2>
      <ol className="list-decimal list-inside text-muted-foreground space-y-2">
        <li>
          <strong>Search for Emojis</strong> – Use the search bar to find emojis
          by keyword or category.
        </li>
        <li>
          <strong>Select Your Favorites</strong> – Click on an emoji to add it
          to your collection field.
        </li>
        <li>
          <strong>Copy & Paste</strong> – Once you're happy with your selection,
          press the copy button and paste your emojis anywhere!
        </li>
        <li>
          <strong>Clear if Needed</strong> – Use the clear button to reset your
          collection and start fresh.
        </li>
      </ol>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        Why Use Emoji Party?
      </h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>
          <strong>Fast & Easy</strong> – Quickly find and copy emojis with just
          a click.
        </li>
        <li>
          <strong>Huge Collection</strong> – Access thousands of emojis in one
          place.
        </li>
        <li>
          <strong>Works Everywhere</strong> – Copy and paste into social media,
          messages, documents, and more.
        </li>
        <li>
          <strong>No Installation Needed</strong> – Use it directly from your
          browser, no downloads required.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">
        Frequently Asked Questions (FAQs)
      </h2>
      <details className="bg-muted p-4 rounded-lg mb-2">
        <summary className="font-semibold cursor-pointer">
          Do I need an account to use Emoji Party?
        </summary>
        <p className="mt-2 text-muted-foreground">
          No! You can search, select, and copy emojis instantly without signing
          up.
        </p>
      </details>
      <details className="bg-muted p-4 rounded-lg mb-2">
        <summary className="font-semibold cursor-pointer">
          Is Emoji Party free?
        </summary>
        <p className="mt-2 text-muted-foreground">
          Yes! Our goal is to make emoji search and copying as easy as possible
          for everyone.
        </p>
      </details>
      <details className="bg-muted p-4 rounded-lg mb-2">
        <summary className="font-semibold cursor-pointer">
          Can I use Emoji Party on mobile?
        </summary>
        <p className="mt-2 text-muted-foreground">
          Absolutely! Our website is mobile-friendly, so you can access emojis
          on the go.
        </p>
      </details>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3 text-center">
        Start Searching & Copying Emojis Now!
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        Enhance your conversations, social media posts, and messages with the
        perfect emojis. Get started now and make your texts more expressive! 🚀
      </p>
    </section>
  );
};

export default SEOContent;
