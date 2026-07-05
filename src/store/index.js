import { createStore } from "redux";

const initialState = {
  isLogin: false,
  token: "",
  name: "",
  image: "",
  description: "",
  price: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IN":
      return { ...state, isLogin: action.value };
    case "update_token":
      return { ...state, token: action.value };
    case "SET_PRODUCT":
      return {
        ...state,
        name: action.payload.name || state.name,
        image: action.payload.image || state.image,
        description: action.payload.description || state.description,
        price: action.payload.price || state.price,
      };
    case "name":
      return { ...state, name: action.value };
    case "image":
      return { ...state, image: action.value };
    case "description":
      return { ...state, description: action.value };
    case "price":
      return { ...state, price: action.value };
    case "LOGOUT":
      return {
        isLogin: false,
        token: "",
        name: "",
        image: "",
        description: "",
        price: "",
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
