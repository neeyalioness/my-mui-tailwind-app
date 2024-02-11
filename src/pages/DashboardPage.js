import React from "react";
import Dashboard from "../components/Dashboard";
import ResponsiveAppBar from "../components/AppResposiveBar";
import { Box, Typography, Divider } from "@material-ui/core";

const DashboardPage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box pt={2} textAlign={"center"}>
        <Typography variant="h4"> Dashboard</Typography>
      </Box>
      <Box pt={2}>
        <Divider />
      </Box>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
