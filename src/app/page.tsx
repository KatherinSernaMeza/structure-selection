"use client";
import { Container, Grid } from "@mui/material";
import Layout from "../app/components/Layout";
import Introduction from "./components/Introduction";
import ListContainer from "./components/ListContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Grid container>
      <Nav />
      <Grid item xs={12}>
        <Layout />
      </Grid>
      <Grid item xs={12}>
        <Introduction />
      </Grid>
      <Grid item xs={12} style={{ display: "contents" }} maxWidth={600}>
        <Container>
          <ListContainer />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
