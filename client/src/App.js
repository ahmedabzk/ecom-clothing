import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { checkUserSession} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import Header from './components/header/header.component';

import { GlobalStyle } from './global-style';









const App = ({ checkUserSession,currentUser }) =>  {
 useEffect(() => {
   checkUserSession();
 }, [checkUserSession])

  return (
    <div>
    <GlobalStyle/>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route 
        exact 
        path="/signin" 
        render = {() => 
        currentUser ? (
          <Redirect to='/' />
        ):(
          <SignInAndSignUpPage />
        )
        }
        />
        <Route path="/checkout" component={CheckoutPage}/>
      </Switch>
    </div>
  );
  }


const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,

});


const mapDispatchToProps = dispatch => ({
  checkUserSession: user => dispatch(checkUserSession())
  

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
