import { Container, Grid, Stack, Typography } from "@mui/material";
import ButtonSecondary from "./buttons/button-secondary.component";
// import { ReactComponent as Logo } from "./assets/logo.svg";
import Logo from "./assets/logo_swaffy.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "50px 0 100px 0" }}
      >
        <Grid item xs={3.5}>
          <Stack direction="row" spacing={2} onClick={() => navigate("/")}>
            <img
              src={Logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontFamily: "Roboto",
                marginY: "7px",
              }}
            >
              Affilify
            </Typography>
          </Stack>
        </Grid>
        <Grid item container xs={8.5} sx={{ justifyContent: "right" }}>
          <ButtonSecondary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
