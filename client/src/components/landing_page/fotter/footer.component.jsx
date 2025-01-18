import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = {
  colors: {
    primary: "#000820",
    secondary: "#05192d",
    accent: "#7933ff",
    text: {
      primary: "#ffffff",
      secondary: "#b0b8c1",
    },
  },
};

const FooterLink = styled(Link)({
  color: theme.colors.text.secondary,
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    color: theme.colors.accent,
    textDecoration: "none",
  },
});

const SocialButton = styled(Link)({
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: `${theme.colors.accent}20`,
  color: theme.colors.text.secondary,
  "&:hover": {
    backgroundColor: theme.colors.accent,
    color: "#fff",
  },
});

const LanguageButton = styled(Button)({
  color: theme.colors.text.primary,
  border: `1px solid ${theme.colors.text.secondary}`,
  padding: "8px 16px",
  textTransform: "none",
  "&:hover": {
    borderColor: theme.colors.accent,
    backgroundColor: `${theme.colors.accent}20`,
  },
});

const Footer = () => {
  const footerSections = [
    {
      title: "Formation",
      links: [
        "Développement web",
        "Intelligence artificielle",
        "Science des données",
        "Cloud computing",
        "Cybersécurité",
        "DevOps",
      ],
    },
    {
      title: "Entreprise",
      links: [
        "À propos de nous",
        "Contactez-nous",
        "Carrières",
        "Blog",
        "Affiliés",
        "Investisseurs",
      ],
    },
    {
      title: "Ressources",
      links: [
        "Centre d'aide",
        "Conditions d'utilisation",
        "Politique de confidentialité",
        "Paramètres des cookies",
        "Plan du site",
        "Accessibilité",
      ],
    },
    {
      title: "Communauté",
      links: [
        "Forum de discussion",
        "Devenir formateur",
        "Partenaires",
        "Programme d'affiliation",
        "Certification",
        "Événements",
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.text.primary,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {section.links.map((link) => (
                  <FooterLink href="#" key={link}>
                    {link}
                  </FooterLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              component="img"
              src="/api/placeholder/120/40"
              alt="Logo"
              sx={{ height: 40 }}
            />
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} LearnPlatform. Tous droits réservés.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LanguageButton startIcon={<LanguageIcon />}>
              Français
            </LanguageButton>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <SocialButton href="https://twitter.com" target="_blank">
                <TwitterIcon fontSize="small" />
              </SocialButton>
              <SocialButton href="https://linkedin.com" target="_blank">
                <LinkedInIcon fontSize="small" />
              </SocialButton>
              <SocialButton href="https://youtube.com" target="_blank">
                <YouTubeIcon fontSize="small" />
              </SocialButton>
              <SocialButton href="https://instagram.com" target="_blank">
                <InstagramIcon fontSize="small" />
              </SocialButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
