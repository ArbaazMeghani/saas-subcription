import { Tier } from "../components";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Grid container spacing={5} alignItems="center" justify="center">
        <Grid item>
          <Tier title="Free" featuresList={["Feature A", "Feature B"]}></Tier>
        </Grid>
        <Grid item>
          <Tier title="Basic"></Tier>
        </Grid>
        <Grid item>
          <Tier title="Pro"></Tier>
        </Grid>
      </Grid>
    </div>
  );
}
