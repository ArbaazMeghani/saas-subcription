import React, { useEffect, useState } from 'react';
import { Tier } from "../components";
import { Grid } from "@material-ui/core";
import Stripe from 'stripe';

Stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default function Home() {

  const {products, setProducts} = useState({
    products: [
      {
        price: 0,
        priceId: ""
      },
      {
        price: 0,
        priceId: ""
      }
    ]
  });
  
  useEffect( async () => {
    const basicTierProduct = await Stripe.products.retrieve(
      'prod_HvSNTZS6a19s8w'
    );
    const proTierProduct = await Stripe.products.retrieve(
      'prod_HvSNTZS6a19s8w'
    );
    
    setProducts({
      products: [basicTierProduct, proTierProduct]
    })
  },[]);

  return (
    <div>
      <Grid container style={{ margin: 0, width: '100%', height: '100vh'}}spacing={5} alignItems="center" justify="center">
        <Grid item>
          <Tier title="Free" featuresList={["Feature A", "Feature B"]}></Tier>
        </Grid>
        <Grid item>
          <Tier title="Basic" price="30" featuresList={["Everything in Free and..."]}></Tier>
        </Grid>
        <Grid item>
          <Tier title="Pro" price="200" featuresList={["Everything in Basic and..."]}></Tier>
        </Grid>
      </Grid>
    </div>
  );
}
