import { Box } from "@mui/system";
import Navbar from "./Navbar";
import GridLayout from "./GridLayout";
import { LeftSideBar } from "./LeftSideBar";
import Sidebar from "./Sidebar";

export const AuthLayout = ({ children }) => {
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
          middle={children}
          right={<Sidebar />}
        />
      </Box>
    </>
  );
};
