import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const SignUpForm = ({userInfo, updateField, updatePage, createAccount}) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createAccount();
    updatePage(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container style={{ margin: 0, width: '100%', height: '100vh'}} spacing={5} alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField required placeholder="email" value={userInfo.email} onChange={(event) => updateField("email", event.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField required placeholder="password" type="password" value={userInfo.password} onChange={(event) => updateField("password", event.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField required placeholder="re-type password" type="password" value={userInfo.passwordConfirm} onChange={(event) => updateField("passwordConfirm", event.target.value)}></TextField>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" type="submit">Sign Up</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SignUpForm;