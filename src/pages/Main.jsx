import React from "react";
import { Container, Button, Typography } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: "blue",
//   },
//   "&:hover": {
//     backgroundColor: "red",
//   },
// });

const Main = () => {
  // const classes = useStyles();

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
      <Button
        variant="contained"
        color="success"
        endIcon={<InsertDriveFileIcon />}
        // sx={{ color: "red" }}
      >
        Create
      </Button>
    </Container>
  );
};
export default Main;
