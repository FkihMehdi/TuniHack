// import { Container } from "@mui/material";
import React from "react";
import GoBack from "./GoBack";
// import GridLayout from "../GridLayout";
import Navbar from "./Navbar";
// import PostEditor from "../PostEditor";
// import Sidebar from "../Sidebar";
import EventEditor from "./EventEditor";

const CreatePostView = () => {
  return (
    <>
      <Navbar />
      <GoBack />
      <EventEditor />
    </>
  );
};

export default CreatePostView;
