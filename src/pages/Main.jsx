import { Grid2, Paper, Container } from "@mui/material";
import React from "react";
import useFetachData from "../components/hooks/useFetchData";
import NoteCard from "../components/NoteCard";
import useDeleteData from "../components/hooks/useDeleteData";

const Main = () => {
  const notes = useFetachData();
  const handleDelete = useDeleteData();
  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Grid2 container spacing={4} justifyContent="center">
        {notes.map((note) => (
          <Grid2 item key={note.id} xs={12} sm={6} md={4}>
            <Paper>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Main;
