import { Box } from "@mui/system";
import Navbar from "./Navbar";
import GridLayout from "./GridLayout";
import { LeftSideBar } from "./LeftSideBar";

export const AuthLayoutWithoutRightSidebar = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          paddingX: 2,
        }}
      >
        <GridLayout
          left={<LeftSideBar />}
          right={children}
          leftWidth={3}
          rightWidth={9}
        />
      </Box>
    </>
  );
};
