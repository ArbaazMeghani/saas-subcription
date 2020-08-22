import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Button, Grid } from '@material-ui/core';

const PaymentForm = ({price = 0, updatePage}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit, price}>
      <Grid container spacing={5} style={{height: "100vh", width: "100%"}} justify="center" alignItems="center" direction="column">
        <Grid item>
          <div style={{ borderBottom: "solid 1px", width: "380px"}}>
            <CardElement options={{
              style: {
                base: {
                  fontFamily: "Arial",
                  fontSize: "16px",
                  color: "#000000"
                }
              }
            }}/>
          </div>
        </Grid>
        <Grid container spacing={5} style={{width: "100%"}} justify="center" alignItems="center">
          <Grid item>
            <Button type="submit" color="primary" variant="contained" disabled={!stripe}>
              Pay ${price}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PaymentForm;
