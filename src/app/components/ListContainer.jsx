import HtmlContainer from "../components/HtmlContainer";
import Grid from "@mui/material/Grid";
import React from "react";

const ListContainer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <HtmlContainer />
        <HtmlContainer />
        <HtmlContainer />
      </Grid>
      <Grid item xs={12} style={{ display: "flex" }}>
        <HtmlContainer />
        <HtmlContainer />
        <HtmlContainer />
      </Grid>
      <Grid item xs={12} style={{ display: "flex" }}>
        <HtmlContainer />
        <HtmlContainer />
        <HtmlContainer />
      </Grid>
      <Grid item xs={12} style={{ display: "flex" }}>
        <HtmlContainer />
        <HtmlContainer />
        <HtmlContainer />
      </Grid>
    </div>
  );
};

export default ListContainer;
