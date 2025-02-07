import { LogOutUser } from "@/lib/features/user/userSlice";
import axios from "axios";
import Cookies from "js-cookie"; // Make sure to replace this with the actual library you're using for cookies
import { useSelector } from "react-redux";

const verifyToken = async () => {
  const dispatch = useSelector();
  let accesstoken = Cookies.get("accessToken", null);
  let refresh = Cookies.get("refreshToken", null);
  // console.log("verify", accesstoken);

  if (accesstoken != null) {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/token/custom_verify",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      if (response.status === 200) {
        return accesstoken;
      } else {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
      }
    } catch (error) {
      Cookies.remove("accessToken");
    }
  }
  if (Cookies.get("refreshToken")) {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/token/refresh",
        {
          refresh: refresh,
        }
      );

      // Cookies.remove('refreshToken');
      Cookies.set("accessToken", response.data.access, {
        expires: 1 / (24 * 60),
      });

      return response.data.access;
    } catch (error) {
      return null;
    }
  }
};

export default verifyToken;
