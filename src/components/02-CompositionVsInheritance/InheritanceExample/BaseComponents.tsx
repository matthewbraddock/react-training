import { Box, Typography } from "@mui/material";
import React from "react";

// Base Panel class that children will extend
export class BasePanel extends React.Component<{
  title: string;
  footer?: React.ReactNode;
}> {
  render() {
    return (
      <Box
        sx={{
          border: "2px solid #e74c3c",
          padding: "20px",
          margin: "10px",
          borderRadius: "8px",
          backgroundColor: "#fff5f5",
        }}
      >
        <Typography variant="h6" sx={{ color: "#e74c3c", mb: 2 }}>
          ❌ {this.props.title}
        </Typography>
        <Box>{this.renderContent()}</Box>
        {this.props.footer && (
          <Box
            sx={{
              mt: 2,
              pt: 2,
              borderTop: "1px solid #e74c3c",
            }}
          >
            {this.props.footer}
          </Box>
        )}
      </Box>
    );
  }

  // Method to be overridden by child classes
  renderContent(): React.ReactNode {
    return <Typography>Override renderContent() method</Typography>;
  }
}

// Another base class for cards
export class BaseCard extends React.Component<{
  header: string;
}> {
  render() {
    return (
      <Box
        sx={{
          border: "2px solid #e67e22",
          padding: "16px",
          margin: "10px",
          borderRadius: "4px",
          backgroundColor: "#fff9f5",
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "#e67e22", mb: 1 }}>
          {this.props.header}
        </Typography>
        {this.renderBody()}
      </Box>
    );
  }

  renderBody(): React.ReactNode {
    return <Typography>Override renderBody() method</Typography>;
  }
}
