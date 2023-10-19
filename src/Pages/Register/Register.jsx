import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";

const Register = () => {
  const { showPassword, setShowPassword, googleSignIn, createUser } = useAuth();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    const isAccepted = form.get("terms");

    // validations
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)) {
      return setError(
        "Password should be minimum six characters, at least one uppercase letter, one lowercase letter and one number!"
      );
    } else if (photoURL && !/\.(jpg|jpeg|png|gif)$/.test(photoURL)) {
      return setError("Pleace provide an valid photo URL!");
    } else if (!isAccepted) {
      return setError("Please accept our terms & conditions!");
    }

    const registeredUser = {
      name,
      photoURL,
      email,
    };
    // console.log(user);
    createUser(email, password)
      .then((result) => {
        setSuccess("user registation successfull.");
        updateProfile(result.user, { displayName: name, photoURL });
        navigate("/");
        swal({
          title: "User registation successfull.",
        });
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(registeredUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        swal({
          title: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        // console.log(user);
        swal({ title: "User registation successfull." });
        navigate("/");
        const registeredUser = {
          name: result.user.displayName,
          photoURL: result.user.photoURL,
          email: result.user.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(registeredUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        swal({
          title: error.message,
        });
      });
  };
  return (
    <div className="bg-[]">
      <div className="px-5 py-6 md:px-0 font-work-sans">
        <div className="max-w-[1400px] mx-auto"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded bg-[#F4F3F0]">
            <h3 className="text-[#403F3F] text-4xl font-semibold text-center pt-10">
              Register your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10 border-b-[1px] border-[#c9ac86]" />
            <form onSubmit={handleRegister} className="card-body">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="p-3 rounded-sm focus:outline-slate-300"
                  required
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Photo URL/(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="p-3 rounded-sm focus:outline-slate-300"
                  // required
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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

                <div className="flex gap-1 mt-3">
                  <input type="checkbox" name="terms" />
                  <label htmlFor="terms">
                    <span>
                      Accept{" "}
                      <a
                        href="#terms"
                        className="text-[#c9ac86] transition-all delay-100 hover:underline"
                      >
                        Terms & Conditions
                      </a>
                    </span>
                  </label>
                </div>
              </div>
              {success && <p className="text-sm text-gray-700">{success}</p>}
              {error && <p className="text-sm text-red-700">{error}</p>}
              <div className="mt-2 form-control">
                <button
                  // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
                  className="text-xl md:text-2xl font-medium w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
                >
                  Register
                </button>
              </div>
              {/* <p className="font-medium text-center">or</p> */}
              <div className="divider">continue with</div>
              <a onClick={handleGoogleSignIn} className="btn">
                <AiOutlineGoogle className="mx-auto text-4xl text-blue-600 " />
              </a>

              <p className="my-3 text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#c9ac86] hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
