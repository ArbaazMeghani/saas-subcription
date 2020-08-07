import React from 'react';
import { Typography } from '@material-ui/core';

const Price = ({price}) => {
  return (
    <div style={{marginTop: "10%"}}>
      <Typography variant="h5" display="inline" color="primary">$</Typography>
      <Typography variant="h2" display="inline" color="primary">{price}</Typography>
      <Typography variant="h5" display="inline" color="textSecondary">/month</Typography>
    </div>
  );
}

export default Price;