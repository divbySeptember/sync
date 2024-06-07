import { SignUp } from "@clerk/nextjs";

const Signup = () => {
  return (
    <div className="bg-contrastBG  h-screen flex justify-center items-center">
      <SignUp fallbackRedirectUrl="/dashboard" />
    </div>
  );
};

export default Signup;
