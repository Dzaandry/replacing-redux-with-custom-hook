import { initStore } from "./store";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
};

const initialActions = {
  TOGGLE_FAV: (state, productId) => {
    const prodIndex = state.products.findIndex((p) => p.id === productId);
    const newFavStatus = !state.products[prodIndex].isFavorite;
    const updatedProducts = [...state.products];
    updatedProducts[prodIndex] = {
      ...state.products[prodIndex],
      isFavorite: newFavStatus,
    };
    return {
      products: updatedProducts,
    };
  },
};

const configureProductsStore = () => initStore(initialActions, initialState);

export default configureProductsStore;
