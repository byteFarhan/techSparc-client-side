import { Link, NavLink } from "react-router-dom";
// import { MdLightMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import defaultUserProfile from "../../assets/user.png";

const Navbar = () => {
  const { userLogout, user, darkMode, setDarkMode } = useAuth();
  // console.log(darkMode);
  //   console.log(user?.photoURL);
  const handleLogout = () => {
    userLogout()
      .then(() => {
        swal("User logout successfull.", {
          button: false,
        });
      })
      .catch((error) => {
        swal(error.message, {
          button: false,
        });
      });
  };
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/my-carts">My Carts</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`py-2 ${
        darkMode ? "bg-slate-800 text-slate-300" : "bg-base-100"
      } `}
    >
      <div className="navbar max-w-[1400px] mx-auto ">
        <div className="flex-1 navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {navLink}
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/fRtzgMTJ/cropped-Tech-SPARK-Logo-Horizontal-Light-Gradient-1.png"
            alt="logo"
            className="object-cover h-5 md:h-8"
          />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navLink}</ul>
        </div>
        {/*darkmode toogle */}
        <div onClick={() => setDarkMode(!darkMode)}>
          <CgDarkMode className="mx-3 text-2xl font-semibold md:text-3xl" />
        </div>
        {user && (
          <p className="hidden font-medium md:block font-work-sans">
            {user?.displayName}
          </p>
        )}
        <img
          src={user?.photoURL ? user.photoURL : defaultUserProfile}
          alt="User"
          className={`h-12 w-12 rounded-full mx-5`}
          title={user?.displayName}
        />
        <div className="">
          {user ? (
            <button onClick={handleLogout} className="md:btn btn-sm">
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="md:btn btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
