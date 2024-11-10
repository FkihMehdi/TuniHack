import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
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
    <Container maxWidth="sm" sx={{ mt: { xs: 2, md: 6 } }}>
      <Stack
        alignItems="center"
        borderRadius={3}
        p={4}
        spacing={4}
        sx={{
          backdropFilter: "blur(10px)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          maxWidth: 450,
          mx: "auto",
          padding: 5,
          border: "1px solid #71A769",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: "1px",
            mb: 3,
            color: "#705EAA",
          }}
        >
          Sign Up
        </Typography>

        <ButtonGroup fullWidth sx={{ mb: 3 }}>
          <Button
            sx={{
              flex: 1,
              backgroundColor: "#705EAA",
              color: "white",
              "&:hover": { backgroundColor: "#71A769" },
            }}
          >
            User
          </Button>
          <Button
            sx={{
              flex: 1,
              backgroundColor: "#705EAA",
              color: "white",
              "&:hover": { backgroundColor: "#71A769" },
            }}
          >
            Association
          </Button>
        </ButtonGroup>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            required
            name="username"
            onChange={handleChange}
            error={errors.username !== undefined}
            helperText={errors.username}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />

          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            required
            name="email"
            onChange={handleChange}
            error={errors.email !== undefined}
            helperText={errors.email}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />

          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            name="password"
            type="password"
            onChange={handleChange}
            error={errors.password !== undefined}
            helperText={errors.password}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />

          <TextField
            label="Confirm Password"
            fullWidth
            required
            margin="normal"
            name="confirmPassword"
            type="password"
            error={errors.confirmPassword !== undefined}
            helperText={errors.confirmPassword}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />

          <ErrorAlert error={serverError} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              my: 2,
              backgroundColor: "#71A769",
              color: "white",
              "&:hover": { backgroundColor: "#705EAA" },
              textTransform: "none",
              borderRadius: "20px",
            }}
          >
            Sign Up
          </Button>

          <Divider sx={{ my: 2, color: "#705EAA" }}>or continue with</Divider>

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
              color: "#705EAA",
              borderColor: "#705EAA",
              textTransform: "none",
              borderRadius: "20px",
            }}
          >
            Sign up with Google
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography color="text.secondary">
              Already have an account?
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#705EAA",
                }}
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
