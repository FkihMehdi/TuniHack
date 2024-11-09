import React from "react";
import PostBrowser from "../PostBrowser";
import { AuthLayout } from "../AuthLayout";

const ExploreView = () => {
  return (
    <AuthLayout>
      <PostBrowser createPost contentType="posts" />
    </AuthLayout>
  );
};

export default ExploreView;
