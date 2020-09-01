import React from 'react';
import { Grid } from '@material-ui/core';

const dashoard = () => {
  return (
    <Grid container style={{ margin: 0, width: '100%', height: '100vh'}}spacing={5} alignItems="center" justify="center">
      <Grid item>
        <h1>
          Dashboard
        </h1>
      </Grid>
    </Grid>
  )
}

export default dashoard;