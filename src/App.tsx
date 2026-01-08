import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./App.css";

// Import Prop Drilling examples
import PropDrillingExample from "./components/01-PropDrilling/PropDrillingExample/App";
import ContextExample from "./components/01-PropDrilling/ContextSolution/App";

// Import Composition vs Inheritance examples
import InheritanceExample from "./components/02-CompositionVsInheritance/InheritanceExample/App";
import CompositionExample from "./components/02-CompositionVsInheritance/CompositionSolution/App";

type Example =
  | "prop-drilling"
  | "context"
  | "inheritance"
  | "composition"
  | "menu";

function App() {
  const [currentExample, setCurrentExample] = useState<Example>("menu");

  if (currentExample === "menu") {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          React Training Examples
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Prop Drilling vs Context Example
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setCurrentExample("prop-drilling")}
          >
            Prop Drilling Example
          </Button>
          <Button
            variant="contained"
            onClick={() => setCurrentExample("context")}
          >
            Context Solution
          </Button>

          <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
            Composition vs Inheritance
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => setCurrentExample("inheritance")}
              fullWidth
              sx={{ maxWidth: 400 }}
            >
              ❌ Inheritance Example
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => setCurrentExample("composition")}
              fullWidth
              sx={{ maxWidth: 400 }}
            >
              ✅ Composition Solution
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setCurrentExample("menu")}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Training Examples
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        {currentExample === "prop-drilling" && <PropDrillingExample />}
        {currentExample === "context" && <ContextExample />}
        {currentExample === "inheritance" && <InheritanceExample />}
        {currentExample === "composition" && <CompositionExample />}
      </Box>
    </Box>
  );
}

export default App;
