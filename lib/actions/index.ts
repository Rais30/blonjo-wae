"use server";

import { connectedToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scrape";

export async function scrapeAndStoreProduct(productURL: string) {
  if (!productURL) return;

  try {
    connectedToDB();

    const scrapeProduct = await scrapeAmazonProduct(productURL);
    
    return scrapeProduct;
      
  } catch (error) {
    throw new Error(`Failed to create/update product : ${error}`);
  }
}
