import { createSlice } from "@reduxjs/toolkit";

const typesSlice = createSlice({
  name: "cases types",
  initialState: {
    types: [
      "Financial Services",
      "Banking",
      "Legal",
      "Sales",
      "Healthcare",
      "Media and Entertainment",
      "E-commerce",
      "Surveillance",
    ],
  },
  reducers: {},
});

export default typesSlice.reducer;
