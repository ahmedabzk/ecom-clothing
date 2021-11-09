import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo} from '../../asserts/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currentUser, }) => (
    <div className="header">
    <Link className="logo-container" to='/'>
    <Logo className="logo"/>

    </Link>
    <div className="options">
    <Link className="option" to='/shop'> 
        SHOP

    </Link>
    <Link className="option" to='/contact'>
        CONTACT

    </Link>
   {currentUser?(
    <div className="option" onClick = {() => auth.signOut()}>
        Sign Out
    </div>
   ):(
    <Link className="option" to='/signin'>
        SIGN IN

    </Link>
    )}

    <CartIcon/>
    <CartDropdown/>

    </div>

    </div>

);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
