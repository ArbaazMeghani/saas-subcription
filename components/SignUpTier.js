import React from 'react';
import Tier from './Tier';
import { Grid, Button } from '@material-ui/core';

const SignUpTier = ({updateField, updatePage, createAccount}) => {

  const handleSelect = (price) => {
    updateField("price", price)
    updatePage(1)
  }

  return (
    <Grid  container style={{ margin: 0, width: '100%', height: '100vh'}} spacing={0} alignItems="center" justify="center" direction="column">
      <Grid container style={{ margin: 0, width: '100%'}} spacing={5} alignItems="center" justify="center">
        <Grid item>
          <Tier title="Basic" price="30" featuresList={["Everything in Free and..."]} onSelect={() => handleSelect(30)} />
        </Grid>
        <Grid item>
          <Tier title="Pro" price="200" featuresList={["Everything in Basic and..."]} onSelect={() => handleSelect(200)} />
        </Grid>
      </Grid>
      <Grid container style={{ margin: 0, width: '100%'}} spacing={5} alignItems="center" justify="center">
        <Grid item>
            <Button color="secondary">continue with free version -{'>'}</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignUpTier;