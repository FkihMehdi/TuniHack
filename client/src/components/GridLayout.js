import { Grid } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left, right, middle, leftWidth = 4, rightWidth = 8 } = props;

  if (middle)
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {left}
        </Grid>
        <Grid item xs={12} md={6}>
          {middle}
        </Grid>
        <Grid item xs={12} md={3}>
          {right}
        </Grid>
      </Grid>
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={leftWidth}>
        {left}
      </Grid>
      <Grid item xs={12} md={rightWidth}>
        {right}
      </Grid>
    </Grid>
  );
};

export default GridLayout;
