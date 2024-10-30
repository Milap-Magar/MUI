import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todo");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == "") setTitleError(true);

    if (details == "") setDetailsError(true);

    if (title && details && category) {
      console.log(title, details, category);
    }
  };

  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create Note App
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          id="standard-basic"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          sx={{
            marginBottom: 2,
            marginTop: 2,
          }}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Note Details"
          id="standard-basic"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
          sx={{
            marginBottom: 2,
            marginTop: 2,
          }}
          error={detailsError}
        />
        <FormControl
          sx={{
            display: "flex",
            marginBottom: 2,
          }}
          required
        >
          <FormLabel>Select Category: </FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel label="TODO" value="todo" control={<Radio />} />
            <FormControlLabel label="Money" value="money" control={<Radio />} />
            <FormControlLabel
              label="Reminders"
              value="reminder"
              control={<Radio />}
            />
            <FormControlLabel label="Work" value="work" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="success"
          type="submit"
          endIcon={<InsertDriveFileIcon />}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default Create;
