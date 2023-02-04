import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../actions";
import { Product } from "../../types/types";

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
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
    // When we send a request,
    // `fetchTodos.pending` is being fired:
    builder.addCase(fetchTodos.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      //state.status = "loading";
      //state.error = null;
    });

    // When a server responses with the data,
    // `fetchTodos.fulfilled` is fired:
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // and change `status` back to `idle`:
      //state.list.push(...payload);
      //state.status = "idle";
      state.products = payload;
    });

    // When a server responses with an error:
    builder.addCase(fetchTodos.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      //if (payload) state.error = payload.message;
      //state.status = "idle";
    });
  },
});

export const productActions = productSlice.actions;

export type { ProductState };

export default productSlice;
