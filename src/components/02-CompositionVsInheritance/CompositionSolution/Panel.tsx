import React from "react";
import { Box, Typography } from "@mui/material";

interface PanelProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "success" | "info" | "warning";
}

// Simple, flexible container that accepts any children
export const Panel: React.FC<PanelProps> = ({
  title,
  children,
  footer,
  variant = "success",
}) => {
  const colors = {
    success: { border: "#27ae60", bg: "#f0fff4", text: "#27ae60" },
    info: { border: "#3498db", bg: "#f0f9ff", text: "#3498db" },
    warning: { border: "#f39c12", bg: "#fffbf0", text: "#f39c12" },
  };

  const color = colors[variant];

  return (
    <Box
      sx={{
        border: `2px solid ${color.border}`,
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: color.bg,
      }}
    >
      <Typography variant="h6" sx={{ color: color.text, mb: 2 }}>
        ✅ {title}
      </Typography>
      <Box>{children}</Box>
      {footer && (
        <Box
          sx={{
            mt: 2,
            pt: 2,
            borderTop: `1px solid ${color.border}`,
          }}
        >
          {footer}
        </Box>
      )}
    </Box>
  );
};
