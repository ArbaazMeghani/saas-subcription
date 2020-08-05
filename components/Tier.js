import React from 'react';
import { Card, Typography, makeStyles, CardContent, CardActions, Button } from '@material-ui/core';
import FeatureList from './FeatureList';
import Price from './Price';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 400,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "1%",
    marginRight: "1%"
  },
  title: {
    fontSize: 32
  },
  content: {
    textAlign: "center",
    marginTop: "5%"
  },
  pos: {
    marginBottom: 12,
  },
  select: {
    borderRadius: "25px"
  },
});

const Tier = ({title = 'title', featuresList = [], price = 0, onSelect = () => {}}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h2" color="primary" gutterBottom>
          {title}
          <div className={classes.content}>
            <FeatureList features={featuresList} />
            <Price price={price} />
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.select} size="medium" fullWidth color="secondary" variant="contained">Select</Button>
      </CardActions>
    </Card>
  );
}

export default Tier;