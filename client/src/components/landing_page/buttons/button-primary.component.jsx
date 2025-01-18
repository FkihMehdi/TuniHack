import { useNavigate } from "react-router-dom";
import { StyledButtonPrimary } from "./button-primary.styles";

const ButtonPrimary = () => {
  const navigate = useNavigate();
  return (
    <StyledButtonPrimary
      variant="contained"
      onClick={() => navigate("/signup")}
    >
      Register
    </StyledButtonPrimary>
  );
};

export default ButtonPrimary;
