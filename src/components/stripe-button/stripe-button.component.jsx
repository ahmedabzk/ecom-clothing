import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jw6yjB1BxL0aHkK1OZaNdqdPWyc7DkwezQ5MY7rLGfmIWNA5rBzcNa27mMrN7eRFfFvGB2hnRHZP9aSn7vP8ogy00VtZuxdQK';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label= 'Pay Now'
            name= 'ecom-clothing ltd.'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/Cuz.svg'
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;