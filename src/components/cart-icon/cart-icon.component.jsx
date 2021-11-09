import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../asserts/shopping-bag.svg';
import { toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';


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

const mapStateToProps = createStructuredSelector({
    itemcount:selectCartItemsCount

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
    (CartIcon);