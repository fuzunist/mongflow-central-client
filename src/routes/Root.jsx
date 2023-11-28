import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Navigate } from "react-router-dom";

import { verify } from "../services/auth";
import { setUser } from "../store/actions/user";
// import { promiseAll } from '@/store/actions/apps'

import Loader from "@/components/Loader";

const Root = () => {
  const [cookies] = useCookies(["access_token", "refresh_token"]);
  const navigate = useNavigate();

  const verifyHandle = async () => {
    // const beforePathname = sessionStorage.getItem("beforePathname");
    // console.log("verifyHandle - beforePathnam: ", beforePathname);

    // if (!cookies?.access_token) return navigate("/auth/login");
    // const response = await verify(cookies?.access_token);
    // if (response?.error) return navigate("/auth/login");
    // navigate(beforePathname);

    <Navigate to={"/auth/login"} />
  };

  useEffect(() => {
    verifyHandle();
  }, []);

  return <Loader />;
};

export default Root;
