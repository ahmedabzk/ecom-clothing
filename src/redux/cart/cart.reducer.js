import CartActionTypes from "./cart.types";
const INITIALIZE_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state= INITIALIZE_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden

        };
        case CartActionTypes.addItem:
        default:
        return state;
    }
};

export default cartReducer;