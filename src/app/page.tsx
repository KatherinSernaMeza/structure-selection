"use client";
import { Grid } from "@mui/material";
import Layout from "../app/components/Layout";
import Introduction from "./components/Introduction";
import ListContainer from "./components/ListContainer";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Layout />
      </Grid>
      <Grid item xs={12}>
        <Introduction />
      </Grid>
      <Grid item xs={12} style={{ display: "contents" }} maxWidth={600}>
        <ListContainer />
      </Grid>
    </Grid>
  );
}
