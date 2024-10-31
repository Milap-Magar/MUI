import { Grid2, Paper, Typography, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetachData from "../components/hooks/useFetchData";

const Main = () => {

  const notes = useFetachData();

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      {" "}
      <Grid2 container spacing={4} justifyContent="center">
        {" "}
        {notes.map((note) => (
          <Grid2 item key={note.id} xs={12} sm={6} md={4}>
            {" "}
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 600, marginBottom: 2 }}
              >
                {note.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  color: "text.secondary",
                  marginBottom: 2,
                }}
              >
                {note.details}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                {note.category}
              </Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Main;
