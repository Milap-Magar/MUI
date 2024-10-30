import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import { useState } from "react";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const toggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
