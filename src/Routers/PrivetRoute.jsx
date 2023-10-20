import PropTypes from "prop-types";
import { Navigate, useLocation, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRoute;
PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
