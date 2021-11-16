import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as Logo} from '../../asserts/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
    <LogoContainer to='/'>
    <Logo className="logo"/>

    </LogoContainer>
    <OptionsContainer>
    <OptionLink to='/shop'> 
        SHOP

    </OptionLink>
    <OptionLink to='/contact'>
        CONTACT

    </OptionLink>
   {currentUser?(
    <OptionDiv onClick = {() => auth.signOut()}>
        Sign Out
    </OptionDiv>
   ):(
    <OptionLink to='/signin'>
        SIGN IN

    </OptionLink>
    )}

    <CartIcon/>

    {
        hidden ? null : <CartDropdown/>
    }
    

    </OptionsContainer>

    </HeaderContainer>

);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
