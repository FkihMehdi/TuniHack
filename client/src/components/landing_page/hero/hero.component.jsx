import { Container, Grid, CardMedia, Typography } from "@mui/material";
import phoneImg from "../assets/image-hero-landscape@2x.webp";
import { ReactComponent as Curve } from "../assets/pattern-curved-line-1.svg";
import ButtonPrimary from "../buttons/button-primary.component";
import "./hero.styles.css";
import heroImage from "../assets/image-hero-portrait@2x.webp";

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: "100px" } }}>
      <Grid container>
        <Grid
          item
          md={10}
          sm={12}
          xs={12}
          sx={{
            marginBottom: { xs: "50px", sm: "100px", md: "50px" },
            padding: { md: "80px 0", sm: "20px 0" },
            backgroundImage: { xs: "none", sm: `url(${heroImage})` },
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: { sm: "400px", md: "404px" },
          }}
        >
          <div className="hero-svg">
            <Curve />
          </div>

          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "38px", sm: "56px", md: "72px" } }}
          >
            Empowering <strong>Young Minds</strong> <br /> for a Brighter
            <strong> Tomorrow.</strong>
          </Typography>
          <div className="hero-p">
            <Typography variant="body1">
              Our networking platform connects youth, clubs, and associations
              across Tunisia, driving scientific innovation, collaboration, and
              real-world opportunities.{" "}
            </Typography>
          </div>
          <ButtonPrimary />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: { sm: "none" }, marginBottom: "56px" }}
        >
          <CardMedia component="img" image={phoneImg} alt="hero phone" />
        </Grid>
        <Grid
          rowSpacing={4}
          item
          container
          md={1.5}
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ padding: { md: "100px 0" } }}
        >
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              2K+
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              Associations & Clubs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              3
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              languages
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              1.2M
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              leads
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
