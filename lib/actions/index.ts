"use server";

import { scrapeAmazonProduct } from "../scrape";

export async function scrapeAndStoreProduct(productURL: string) {
  if (!productURL) return;

  try {
    const scrapeProduct = await scrapeAmazonProduct(productURL);
  } catch (error) {
    throw new Error(`Failed to create/update product : ${error}`);
  }
}
