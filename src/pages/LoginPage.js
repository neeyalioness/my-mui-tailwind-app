import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/user";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
} from "@material-ui/core";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      // Set user information in session storage
      sessionStorage.setItem("user", JSON.stringify(user));

      // Redirect based on user role
      if (user.role === "admin") {
        navigate("/console", {
          replace: true,
        });
      } else if (user.role === "employee") {
        navigate("/dashboard", {
          replace: true,
        });
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        maxWidth
        align="center"
        style={{
          background: "linear-gradient(90deg, #C0E6FF 50%, #fff 50%)",
          height: "100vh",
        }}
      >
        <Box textAlign="center" style={{ width: "20rem" }}>
          <Box pt={2}>
            <Typography variant="h2"> App Name </Typography>
          </Box>
          <Box pt={2}>
            <Divider />
          </Box>
          <Box pl={2} pr={2} pt={22}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box p={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box style={{ cursor: "pointer" }} pl={2}>
            <Typography align="left" variant="body2" color="#3d69d9">
              Forgot password
            </Typography>
          </Box>
          <Box textAlign="center" p={2}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              style={{ backgroundColor: "#3d69d9" }}
            >
              Login
            </Button>
          </Box>
          <Box textAlign="center" p={2}>
            <Typography variant="body2">
              {" "}
              Don't have an account ? <Link>Register here</Link>{" "}
            </Typography>
          </Box>
        </Box>
      </Container>
    </form>
  );
};

export default LoginPage;
