import { useState, useEffect } from "react";
import Cookie from "js-cookie";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Profile = () => {
  const [profileData, setProfileData] = useState({
    status: apiStatusConstants.initial,
    profile: null,
    error: null,
  });

  useEffect(() => {
    const getProfile = async () => {
      setProfileData((prev) => ({
        ...prev,
        status: apiStatusConstants.inProgress,
        profile: null,
        error: null,
      }));

      const apiUrl = "http://localhost:8090/profile";
      const option = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookie.get("jwt_token")}`,
        },
      };

      const response = await fetch(apiUrl, option);
      const data = await response.json();
      console.log(data.data);
      if (response.ok) {
        setProfileData((prev) => ({
          ...prev,
          status: apiStatusConstants.success,
          profile: data,
        }));
      } else {
        setProfileData((prev) => ({
          ...prev,
          status: apiStatusConstants.failure,
          error: data.error,
        }));
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <div className="profile-container">
        <p></p>
      </div>
    </>
  );
};

export default Profile;
