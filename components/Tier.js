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
    marginRight: "1%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
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
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  },
  titleBreak: {
    background: "rgb(10,161,42)",
    background: "linear-gradient(90deg, rgba(10,161,42,1) 0%, rgba(19,145,180,1) 49%, rgba(156,25,189,1) 100%, rgba(0,212,255,1) 100%)",
    height: "5px"
  }
});

const Tier = ({title = 'title', featuresList = [], price = 0, onSelect = (price) => {console.log(price)}}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <div>
          <Typography className={classes.title} variant="h2" color="primary" gutterBottom>
            {title}
          </Typography>
          <hr className={classes.titleBreak}/>
        </div>
        <div className={classes.content}>
          <FeatureList features={featuresList} />
          <Price price={price} />
        </div>
      </CardContent>
      <CardActions>
        <Button className={classes.select} onClick={() => onSelect(price)} size="medium" fullWidth color="secondary" variant="contained">Select</Button>
      </CardActions>
    </Card>
  );
}

export default Tier;