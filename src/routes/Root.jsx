import { useEffect } from "react";
import Loader from "@/components/Loader";

const Root = () => {
  const redirectHandle = async () => {
    window.location.href = "/auth/login";
  };

  useEffect(() => {
    redirectHandle();
  }, []);

  return <Loader />;
};

export default Root;
