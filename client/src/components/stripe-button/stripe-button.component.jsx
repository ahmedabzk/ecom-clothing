import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jw6yjB1BxL0aHkK1OZaNdqdPWyc7DkwezQ5MY7rLGfmIWNA5rBzcNa27mMrN7eRFfFvGB2hnRHZP9aSn7vP8ogy00VtZuxdQK';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token

      }
    })
     .then(response => {
      alert("payment successful")
    })
     .catch(error => {
      console.log('payment Error: ', error);
      alert("There was an issue with your payment ",error);
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
