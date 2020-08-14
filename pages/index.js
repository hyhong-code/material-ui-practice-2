import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

const index = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Projects</Typography>
      </Grid>
    </Grid>
  );
};

export default index;
