import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const Login = () => {
  const { showPassword, setShowPassword, userSignIn } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User logged in successfull.");
        swal("User logged in successfull.", {
          button: false,
        });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="py-6 px-5 md:px-0">
        <div className="max-w-[1400px] mx-auto"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded bg-[#F4F3F0]">
            <h3 className="text-[#403F3F] font-semibold text-4xl text-center pt-10">
              Login your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10 border-b-[1px] border-[#c9ac86]" />
            <form onSubmit={handleLogin} className="card-body">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="p-3 rounded-sm focus:outline-slate-300"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="w-full p-3 rounded-sm focus:outline-slate-300"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-3"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </div>
              {success && <p className="text-sm text-gray-700">{success}</p>}
              {error && <p className="text-sm text-red-700">{error}</p>}

              <div className="mt-2 form-control">
                <button
                  // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
                  className="text-xl md:text-2xl font-medium w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
                >
                  Login
                </button>
              </div>
              <p className="my-3 text-center">
                {`Don't have any account? `}
                <Link
                  to={"/register"}
                  className="text-[#c9ac86] hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
