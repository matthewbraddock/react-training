import React from "react";
import { Typography, Box } from "@mui/material";
import { BasePanel } from "./BaseComponents";

interface StatsPanelProps {
  title: string;
  footer?: React.ReactNode;
  stats: {
    views: number;
    clicks: number;
    conversions: number;
  };
}

// Another extension of BasePanel
export class StatsPanel extends BasePanel {
  declare props: StatsPanelProps;

  renderContent(): React.ReactNode {
    const { stats } = this.props;
    const rate = ((stats.clicks / stats.views) * 100).toFixed(1);

    return (
      <Box>
        <Typography sx={{ mt: 1, color: "#e74c3c" }}>
          <strong>Views:</strong> {stats.views.toLocaleString()}
        </Typography>
        <Typography sx={{ mt: 1, color: "#e74c3c" }}>
          <strong>Clicks:</strong> {stats.clicks.toLocaleString()}
        </Typography>
        <Typography sx={{ mt: 1, color: "#e74c3c" }}>
          <strong>Conversions:</strong> {stats.conversions.toLocaleString()}
        </Typography>
        <Typography sx={{ mt: 1, color: "#e74c3c", fontWeight: "bold" }}>
          Click Rate: {rate}%
        </Typography>
      </Box>
    );
  }
}
