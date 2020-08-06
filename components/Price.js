import React from 'react';
import { Typography } from '@material-ui/core';

const Price = ({price}) => {
  return (
    <div>
      <Typography variant="h5" display="inline">$</Typography>
      <Typography variant="h2" display="inline">{price}</Typography>
      <Typography variant="h5" display="inline" color="textSecondary">/month</Typography>
    </div>
  );
}

export default Price;