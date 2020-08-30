import React, { useEffect, useState } from 'react';
import { Tier } from "../components";
import { Grid } from "@material-ui/core";
import { RetrievePrice } from '../price'

export default function Home() {

  const [prices, setPrices] = useState({
    values: [
      {
        id: '',
        unit_amount_decimal: 0
      },
      {
        id: '',
        unit_amount_decimal: 0
      }
    ]
  });

  useEffect(() => {
    const retrievePrices = async () => {
      const basicTierPrice = await RetrievePrice(process.env.NEXT_PUBLIC_STRIPE_BASIC_TIER_PRICE_ID);
      const proTierPrice = await RetrievePrice(process.env.NEXT_PUBLIC_STRIPE_PRO_TIER_PRICE_ID);
      
      setPrices({
        values: [JSON.parse(basicTierPrice.data), JSON.parse(proTierPrice.data)]
      })
    }
    retrievePrices();
  }, [prices.values[0].id, prices.values[1].id]);

  return (
    <div>
      <Grid container style={{ margin: 0, width: '100%', height: '100vh'}}spacing={5} alignItems="center" justify="center">
        <Grid item>
          <Tier title="Free" featuresList={["Feature A", "Feature B"]}></Tier>
        </Grid>
        <Grid item>
          <Tier title="Basic" price={prices.values[0]} featuresList={["Everything in Free and..."]}></Tier>
        </Grid>
        <Grid item>
          <Tier title="Pro" price={prices.values[1]} featuresList={["Everything in Basic and..."]}></Tier>
        </Grid>
      </Grid>
    </div>
  );
}
