import React from "react";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

const AdminConsolePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        align="center"
        style={{
          height: "100vh",
        }}
      >
        <Box textAlign="center">
          <Box pt={2} pb={12}>
            <Typography variant="h2">Machines Console </Typography>
          </Box>

          <Box className="flex w-full h-full" justifyContent={"center"}>
            <Box pl={2} pr={2}>
              <Card
                sx={{ width: 300, height: 300, cursor: "pointer" }}
                onClick={() => {
                  navigate("/dashboard", {
                    replace: true,
                  });
                }}
              >
                <CardContent style={{ paddingTop: "88px" }}>
                  <DashboardIcon />
                  <Typography variant="h5" component="h2">
                    Dashboard
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Monitor your beverage machines' status
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{ width: 300, height: 300, cursor: "pointer" }}
                onClick={() => {
                  navigate("/machines", {
                    replace: true,
                  });
                }}
              >
                <CardContent style={{ paddingTop: "88px" }}>
                  <CoffeeMakerIcon />
                  <Typography variant="h5" component="h2">
                    Machine Configuration
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Update configurations for each machine
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AdminConsolePage;
