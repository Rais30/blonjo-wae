"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";

const isValid = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;

    if (
      hostName.includes(".com") ||
      hostName.includes(".co.id") ||
      hostName.includes(".")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);

  const hendleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValid(searchPrompt);

    if (!isValidLink) alert("Please provide a valid Amazon product link");

    try {
      setLoading(true);

      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12 " onSubmit={hendleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
