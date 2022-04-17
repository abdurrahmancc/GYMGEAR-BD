import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequierAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, hooksError] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequierAuth;
