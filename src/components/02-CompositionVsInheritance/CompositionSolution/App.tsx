import React, { useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import { Panel } from "./Panel";
import { Card } from "./Card";
import { UserInfo } from "./UserInfo";
import { Stats } from "./Stats";
import type { User, UpdateUser } from "../types";

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
  });

  const [stats] = useState({
    views: 45230,
    clicks: 3421,
    conversions: 287,
  });

  const updateUser: UpdateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ✅ Composition Example
      </Typography>

      <Alert severity="success" sx={{ mb: 3 }}>
        <Typography variant="body2">
          <strong>Recommended:</strong> This example uses composition to combine
          simple, focused components flexibly.
        </Typography>
      </Alert>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Components are combined using children props. Nothing is inherited!
      </Typography>

      {/* Simple composition */}
      <Panel
        title="User Panel (Composed)"
        footer={
          <Typography variant="caption">
            🎉 Panel contains UserInfo - simple composition!
          </Typography>
        }
      >
        <UserInfo user={user} updateUser={updateUser} />
      </Panel>

      {/* Same container, different content */}
      <Panel
        title="Stats Panel (Composed)"
        variant="info"
        footer={
          <Typography variant="caption">
            🎉 Same Panel component, different content!
          </Typography>
        }
      >
        <Stats stats={stats} />
      </Panel>

      {/* Mix and match freely */}
      <Panel title="Mixed Content Panel" variant="warning">
        <Typography sx={{ mb: 2 }}>
          With composition, you can put anything inside!
        </Typography>
        <UserInfo user={user} updateUser={updateUser} />

        <Card header="Stats Card (nested composition)">
          <Stats stats={stats} />
        </Card>
      </Panel>

      {/* Complex composition */}
      <Panel
        title="Dashboard (Complex Composition)"
        footer={
          <Typography variant="caption">
            Easily combine multiple components in creative ways
          </Typography>
        }
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Card header="User">
            <UserInfo user={user} updateUser={updateUser} />
          </Card>
          <Card header="Analytics">
            <Stats stats={stats} />
          </Card>
        </Box>
      </Panel>

      <Box
        sx={{
          mt: 3,
          p: 2,
          bgcolor: "#f0fff4",
          color: "#1c7d44ff",
          borderRadius: "8px",
          border: "1px solid #27ae60",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Benefits of this approach:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography variant="body2">
              Can use hooks and modern React patterns
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Components are simple and focused on one thing
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Easy to understand what each component does
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Highly reusable - mix and match however needed
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              No coupling between container and content
            </Typography>
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
