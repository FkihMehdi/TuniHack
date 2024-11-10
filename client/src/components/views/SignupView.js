import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  // Alert,
} from "@mui/material";

import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { signup } from "../../api/users";
import { loginUser } from "../../helpers/authHelper";
import { useNavigate } from "react-router-dom";
import Copyright from "../Copyright";
import ErrorAlert from "../ErrorAlert";
import { isLength, isEmail, contains } from "validator";

const SignupView = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length !== 0) return;

    const data = await signup(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  const validate = () => {
    const errors = {};

    if (!isLength(formData.username, { min: 6, max: 30 })) {
      errors.username = "Must be between 6 and 30 characters long";
    }

    if (contains(formData.username, " ")) {
      errors.username = "Must contain only valid characters";
    }

    if (!isLength(formData.password, { min: 8 })) {
      errors.password = "Must be at least 8 characters long";
    }

    if (!isEmail(formData.email)) {
      errors.email = "Must be a valid email address";
    }

    setErrors(errors);

    return errors;
  };

  return (
    <Container maxWidth={"sm"} sx={{ mt: { xs: 2, md: 6 } }}>
      <Stack
        alignItems="center"
        border={1}
        borderRadius={2}
        borderColor="divider"
        boxShadow={2}
        p={4}
        spacing={3}
      >
        <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
          {/* <Link to="/" color="inherit" underline="none">
            PostIt
          </Link> */}
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontSize: 40,
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Sign Up
        </Typography>
        <ButtonGroup
          aria-label="button group flex"
          fullWidth
          sx={{
            borderColor: "white",
          }}
        >
          <Button
            sx={{
              flex: 1,
            }}
          >
            User
          </Button>
          <Button
            sx={{
              flex: 1,
            }}
          >
            Association
          </Button>
        </ButtonGroup>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            autoFocus
            required
            id="username"
            name="username"
            onChange={handleChange}
            error={errors.username !== undefined}
            helperText={errors.username}
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            required
            id="email"
            name="email"
            onChange={handleChange}
            error={errors.email !== undefined}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            error={errors.password !== undefined}
            helperText={errors.password}
          />
          <TextField
            label="Confirm Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            // onChange={handleChange}
            error={errors.confirmPassword !== undefined}
            helperText={errors.confirmPassword}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            id="phone"
            name="phone"
            onChange={handleChange}
          />
          <TextField
            label="Age"
            fullWidth
            margin="normal"
            id="age"
            name="age"
            onChange={handleChange}
          />

          <ErrorAlert error={serverError} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              my: 2,
              bgcolor: "#705EAA",
              "&:hover": {
                bgcolor: "#705EAA",
              },
              // textTransform: "none",
            }}
          >
            Sign Up
          </Button>
          <Divider
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            or continue with
          </Divider>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google"
                width={20}
                height={20}
              />
            }
            sx={{
              my: 2,
              color: "black",
              borderColor: "black",
              textTransform: "none",
            }}
          >
            Sign up with Google
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">
              Already have an account?
              <Link
                to="/login"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Log in
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

export default SignupView;
