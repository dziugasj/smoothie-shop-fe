import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/types";

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetch",
  async () => {
    // Fetch the backend endpoint:
    const response = await fetch("./api/v1/products");

    // Get the JSON from the response:
    const data: Product[] = await response.json();

    console.log(data);

    // Return result:
    return data;
  }
);
