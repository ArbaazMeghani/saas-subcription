import React from 'react';
import { Typography } from '@material-ui/core';

const Feature = ({value}) => {
  return (
    <Typography variant="h1" color="textPrimary">{value}</Typography>
  );
}

export default Feature;