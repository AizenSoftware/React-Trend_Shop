import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCardItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      let upadatedItems = [...state.items];
      if (existingCardItemIndex != -1) {
        upadatedItems[existingCardItemIndex] = {
          ...state.items[existingCardItemIndex],
          amount:
            state.items[existingCardItemIndex].amount + action.item.amount,
        };
      } else {
        upadatedItems = [...state.items, action.item];
      }
      return {
        items: upadatedItems,
        totalAmount: state.totalAmount + action.item.amount * action.item.price,
      };
    case "REMOVE":
      const filteredItem = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);

      return {
        items: filteredItem,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };

    case "CLEAR":
      return defaultCartState;
    default:
      return state;
  }
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item });
    },
    removeItem: (e, id) => {
      e.preventDefault();
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR" });
    },
  };

  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};
