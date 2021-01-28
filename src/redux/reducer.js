import {
  ADD_ITEM,
  INCREMENT_CART_QUANTITY,
  DECREMENT_CART_QUANTITY,
  REMOVE_ITEM,
  INCREASE_LIKES,
} from "./actionType";
const initialState = {
  items: [],
  totalAmount: 0,
  loading: true,
  error: false,
};

const Reducer = (state = initialState, action) => {
  let cart = state.items;
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case INCREMENT_CART_QUANTITY:
      const item = cart.find(
        (item) => item.itemName === action.payload.itemName
      );
      const newCart = cart.filter(
        (item) => item.itemName !== action.payload.itemName
      );
      item.itemCount += action.payload.itemCount;
      newCart.push(item);
      return {
        ...state,
        items: newCart,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.itemCount,
      };

    case DECREMENT_CART_QUANTITY:
      const decrementItem = cart.find(
        (item) => item.itemName === action.payload.itemName
      );
      const newDeleteCart = cart.filter(
        (item) => item.itemName !== action.payload.itemName
      );
      decrementItem.itemCount -= action.payload.itemCount;
      newDeleteCart.push(decrementItem);
      console.log(newDeleteCart);

      return {
        ...state,
        items: newDeleteCart,
        totalAmount:
          state.totalAmount - action.payload.price * action.payload.itemCount,
      };
    case REMOVE_ITEM:
      const removeItem = cart.find(
        (item) => item.itemName === action.payload.itemName
      );
      return {
        ...state,
        items: cart.filter((item) => item.itemName !== action.payload.itemName),
        totalAmount:
          state.totalAmount - removeItem.price * removeItem.itemCount,
        loading: false,
      };
    case INCREASE_LIKES:
      const likedItem = cart.find(
        (item) => item.itemName === action.payload.itemName
      );

      const newLikesCart = cart.filter(
        (item) => item.itemName !== action.payload.itemName
      );
      likedItem.likes += 1;
      newLikesCart.push(likedItem);
      return {
        ...state,
        items: newLikesCart,
      };

    default:
      return state;
  }
};
export default Reducer;
