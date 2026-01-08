import React from "react";
import { Typography, Box } from "@mui/material";

interface StatsProps {
  stats: {
    views: number;
    clicks: number;
    conversions: number;
  };
}

// Simple, focused component for displaying statistics
export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const rate = ((stats.clicks / stats.views) * 100).toFixed(1);

  return (
    <Box>
      <Typography sx={{ mt: 1, color: "#27ae60" }}>
        <strong>Views:</strong> {stats.views.toLocaleString()}
      </Typography>
      <Typography sx={{ mt: 1, color: "#27ae60" }}>
        <strong>Clicks:</strong> {stats.clicks.toLocaleString()}
      </Typography>
      <Typography sx={{ mt: 1, color: "#27ae60" }}>
        <strong>Conversions:</strong> {stats.conversions.toLocaleString()}
      </Typography>
      <Typography sx={{ mt: 1, color: "#27ae60", fontWeight: "bold" }}>
        Click Rate: {rate}%
      </Typography>
    </Box>
  );
};
