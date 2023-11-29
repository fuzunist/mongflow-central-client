import { useEffect } from "react";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate= useNavigate();
  const redirectHandle = async () => {
   navigate("/auth/login")
  };

  useEffect(() => {
    redirectHandle();
  }, []);

  return <Loader />;
};

export default Root;
