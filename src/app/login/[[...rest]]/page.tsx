import { SignIn } from "@clerk/nextjs";

import React from "react";

const Signin = () => {
  return (
    <div className="bg-contrastBG  h-screen flex justify-center items-center">
      <SignIn fallbackRedirectUrl="/dashboard" />
    </div>
  );
};

export default Signin;
