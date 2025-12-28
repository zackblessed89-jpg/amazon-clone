import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }

      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    }

    case Type.INCREMENT_AMOUNT:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case Type.DECREMENT_AMOUNT:
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.id ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount > 0),
      };

    case Type.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};
