import React from 'react';
import { Typography } from '@material-ui/core';

const Feature = ({value}) => {
  return (
    <Typography variant="subtitle1" color="textSecondary">{value}</Typography>
  );
}

export default Feature;