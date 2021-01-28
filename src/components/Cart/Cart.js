import React from "react";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementCartQuantity,
  decrementCartQuantity,
} from "../../redux/actions";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartLists = useSelector((state) => state);

  // for increment the food item
  const incrementItemHandler = (itemName, itemPrice) => {
    console.log(itemName, itemPrice);
    dispatch(
      incrementCartQuantity({
        itemName: itemName,
        price: itemPrice,
        itemCount: 1,
      })
    );
  };

  // for decrement the food item
  const decrementItemHandler = (itemName, itemPrice) => {
    console.log(itemName, itemPrice);
    dispatch(
      decrementCartQuantity({
        itemName: itemName,
        price: itemPrice,
        itemCount: 1,
      })
    );
  };

  // to completely remove the food item
  const removeItemHandler = (itemName, itemPrice) => {
    console.log(itemName, itemPrice);
    dispatch(
      removeItem({
        itemName: itemName,
        price: itemPrice,
        itemCount: 1,
      })
    );
  };

  return (
    <div className="cart">
      <div className="cart__header">YOUR ORDER</div>
      <div className="cart__body">
        {cartLists.items.map((item) => {
          return (
            <li key={Math.random()}>
              <div className="cart__text">
                {/* // plus button */}
                <AddBoxOutlinedIcon
                  onClick={() =>
                    incrementItemHandler(item.itemName, item.price)
                  }
                />

                {/* item quantity */}
                {item.itemCount}

                {/* //checking item quantity zero or not ...then decrement quantity */}
                {item.itemCount === 0 ? (
                  removeItemHandler(item.itemName, item.price)
                ) : (
                  <IndeterminateCheckBoxIcon
                    onClick={() =>
                      decrementItemHandler(item.itemName, item.price)
                    }
                  />
                )}

                {/* displaying item name */}
                {item.itemName}
              </div>

              <div className="cart__text">
                {/* total item price */}
                <div>{item.price * item.itemCount} ZL </div>

                {/* cross to remove item completely */}
                <HighlightOffIcon
                  style={{ fill: "red", marginLeft: "4px" }}
                  onClick={() => removeItemHandler(item.itemName, item.price)}
                >
                  Delete Item
                </HighlightOffIcon>
              </div>
            </li>
          );
        })}
      </div>
      <div className="cart__footer">Total : {cartLists.totalAmount} Zl</div>
    </div>
  );
};

export default Cart;
