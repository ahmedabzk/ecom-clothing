import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../asserts/shopping-bag.svg';
import { toggleCartHidden} from '../../redux/cart/cart.actions';


import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemcount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemcount}</span>

    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())

});

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemcount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0)

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
    (CartIcon);