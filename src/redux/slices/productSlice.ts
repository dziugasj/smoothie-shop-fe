import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions";
import { Product } from "../../types/types";

type ProductState = {
  products: Product[];
  loadStatus: "loading" | "idle" | "failed";
};

const initialState: ProductState = {
  products: [],
  loadStatus: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    refresh(state) {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loadStatus = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.loadStatus = "idle";
      state.products = payload;
    });
    builder.addCase(fetchProducts.rejected, (state, { payload }) => {
      state.loadStatus = "failed";
      state.products = [];
    });
  },
});

export const productActions = productSlice.actions;

export type { ProductState };

export default productSlice;
