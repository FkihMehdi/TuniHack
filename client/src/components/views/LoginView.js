import {
  Alert,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import ErrorAlert from "../ErrorAlert";
import { loginUser } from "../../helpers/authHelper";
import Copyright from "../Copyright";

const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      <Stack
        alignItems="center"
        borderRadius={2}
        boxShadow={5}
        p={4}
        spacing={3}
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "1px solid #71A769",
          maxWidth: 400,
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#705EAA",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            autoFocus
            required
            name="email"
            onChange={handleChange}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiInputBase-root": {
                padding: "10px",
                backgroundColor: "#F5F5F5",
              },
            }}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            name="password"
            type="password"
            onChange={handleChange}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiInputBase-root": {
                padding: "10px",
                backgroundColor: "#F5F5F5",
              },
            }}
          />

          <ErrorAlert error={serverError} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              my: 2,
              backgroundColor: "#705EAA",
              color: "white",
              "&:hover": {
                backgroundColor: "#71A769",
              },
              textTransform: "none",
              borderRadius: "20px",
            }}
          >
            Login
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography color="text.secondary">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#705EAA",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Copyright />
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginView;
