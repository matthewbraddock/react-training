import React from "react";
import { Box, Typography } from "@mui/material";

interface CardProps {
  header: string;
  children: React.ReactNode;
}

// Another simple container component
export const Card: React.FC<CardProps> = ({ header, children }) => {
  return (
    <Box
      sx={{
        border: "2px solid #27ae60",
        padding: "16px",
        margin: "10px",
        borderRadius: "4px",
        backgroundColor: "#f9fff9",
      }}
    >
      <Typography variant="subtitle1" sx={{ color: "#27ae60", mb: 1 }}>
        {header}
      </Typography>
      {children}
    </Box>
  );
};
