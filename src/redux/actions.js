import {
  ADD_ITEM,
  INCREMENT_CART_QUANTITY,
  DECREMENT_CART_QUANTITY,
  REMOVE_ITEM,
  INCREASE_LIKES,
} from "./actionType";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const incrementCartQuantity = (item) => {
  return {
    type: INCREMENT_CART_QUANTITY,
    payload: item,
  };
};

export const decrementCartQuantity = (item) => {
  return {
    type: DECREMENT_CART_QUANTITY,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const incrementLikes = (item) => {
  return {
    type: INCREASE_LIKES,
    payload: item,
  };
};
