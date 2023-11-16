import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ActiveRouteStyle = ({ routeName, routeLink }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "underline text-pink-500 font-semibold"
            : "hover:text-pink-500"
        }
        to={routeLink}
        onClick={() => scrollTo(0, 0)}
      >
        {routeName}
      </NavLink>
    </>
  );
};

export default ActiveRouteStyle;
ActiveRouteStyle.propTypes = {
  routeName: PropTypes.string.isRequired,
  routeLink: PropTypes.string.isRequired,
};
