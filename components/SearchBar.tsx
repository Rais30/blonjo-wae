"use client";

import React, { FormEvent, useState } from "react";

const isValid = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;

    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon.co.id") ||
      hostName.includes("amazon.") ||
      hostName.includes("amazon")
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

  const hendleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValid(searchPrompt);

    if (!isValidLink) alert("Please provide a valid Amazon product link");

    try {
      setLoading(true);
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