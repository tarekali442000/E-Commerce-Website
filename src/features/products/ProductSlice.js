import { createSlice } from "@reduxjs/toolkit";
import products from "../../productsContent";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  selectedCateogry: "All",
};

//search product and search cateogry
const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
    const matchCateogry =
      state.selectedCateogry === "All" ||
      product.category === state.selectedCateogry;
    return matchSearch && matchCateogry;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectedCateogry: (state, action) => {
      state.selectedCateogry = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});

export const { setSearchTerm, setSelectedCateogry } = productSlice.actions;
export default productSlice.reducer;
