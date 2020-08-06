import { Tier } from "../components";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Grid container style={{ margin: 0, width: '100%'}}spacing={5} alignItems="center" justify="center">
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
