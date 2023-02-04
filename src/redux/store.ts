import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: { productState: productSlice.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
