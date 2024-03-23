import { Link } from "react-router-dom";

const NoAuth = () => {
  return (
    <>
      {/* <a
        href="/login"
        className="py-2 px-3 max-md:py-1 max-md:px-2 text-md text-white mx-2 inline-flex items-center hover:bg-[#393848fc] rounded-md group"
      >
        <span className="group-hover:text-blue-600">Login</span>
      </a> */}
      <Link
        to="/login"
        className="py-2 px-3 max-md:py-1 max-md:px-2 text-md text-white mx-2 inline-flex items-center hover:bg-[#393848fc] rounded-md group"
      >
        <span className="group-hover:text-blue-600">Login</span>
      </Link>
      <Link
        to={"/register"}
        className="py-2 px-3 max-md:py-1 max-md:px-2 text-md text-black bg-white rounded-md inline-flex items-center group"
      >
        <span className="group-hover:text-blue-600">Register</span>
      </Link>
    </>
  );
};

export default NoAuth;
