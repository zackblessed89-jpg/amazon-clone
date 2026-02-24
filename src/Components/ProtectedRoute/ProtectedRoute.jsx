import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg }) => {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg } });
    }
  }, [user, navigate, msg]);

  // Prevent rendering protected content if not logged in
  if (!user) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
