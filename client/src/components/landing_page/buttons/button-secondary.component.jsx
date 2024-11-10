import { StyledButtonSecondary } from "./button-secondary.styles";
import { useNavigate } from "react-router-dom";

const ButtonSecondary = () => {
  const navigate = useNavigate();
  return (
    <StyledButtonSecondary
      variant="outlined"
      sx={{
        padding: { xs: "12px 16px", sm: "12px 24px" },
        fontSize: { xs: "12px", sm: "16px" },
      }}
      onClick={() => navigate("/signup")}
    >
      Register
    </StyledButtonSecondary>
  );
};

export default ButtonSecondary;
