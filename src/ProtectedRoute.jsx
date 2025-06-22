// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAuthStore from "./store/AuthStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
