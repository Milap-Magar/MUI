import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import React from "react";

const NoteCard = ({ note }) => {
  return (
    <>
      <Card elevation={2}>
        <CardHeader
          action={
            <IconButton onClick={handleDelete}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default NoteCard;
