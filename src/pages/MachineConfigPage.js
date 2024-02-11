import React from "react";
import ResponsiveAppBar from "../components/AppResposiveBar";
import MachineStatusDisplay from "../components/MachineStatusDisplay";
import { Box, Typography, Divider } from "@material-ui/core";

const MachineConfigPage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box pt={2} textAlign={"center"}>
        <Typography variant="h4"> MachineConfig</Typography>
      </Box>
      <Box pt={2}>
        <Divider />
      </Box>
      <MachineStatusDisplay />
    </div>
  );
};

export default MachineConfigPage;
