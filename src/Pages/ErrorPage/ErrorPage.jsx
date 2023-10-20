import { Link } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-green-800 flex-col h-screen space-y-3">
      <TfiFaceSad className="md:text-9xl text-7xl font-bold" />
      <h1 className="text-5xl md:text-7xl">404</h1>
      <h1 className="text-3xl font-semibold">Page not found!</h1>
      <p className="lg:w-1/4 md:w-2/4 text-center font-medium px-3 md:px-0">
        {`The page you're looking for doesn't
      exist. You can return to the homepage or try searching for what you
      need. If you think this is an error, please contact us. Thank you!`}
      </p>
      <Link to={"/"}>
        <button className="text-xl md:text-2xl font-medium w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
