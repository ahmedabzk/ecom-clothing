import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.components';

import './cart-dropdown.styles.scss';

const CartDropdown = ({CartItems}) => (
    <div className="cart-dropdown">
    <div className="cart-items">
        {
        CartItems.map(CartItem => (
            <CartItem key={CartItem.id} item={CartItem}/>

        ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = ({ cart: {CartItems}}) => (
    CartItems
);

export default connect(mapStateToProps)(CartDropdown);