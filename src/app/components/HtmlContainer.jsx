import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const HtmlContainer = () => {
  return (
    <Card style={{ minWidth: "33.333%", margin: "10px" }}>
      <CardContent>
        <p>Word of the Day</p>
        <p>benevolent</p>
        <p sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </p>
        <p>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </p>
      </CardContent>
    </Card>
  );
};

export default HtmlContainer;
