import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth : authSlice, // Add your reducer here
  },
});

export default store;
