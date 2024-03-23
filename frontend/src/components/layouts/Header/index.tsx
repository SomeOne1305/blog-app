import React from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthentificated } = React.useContext(Context);
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            {isAuthentificated
              ? "📝 Start Your Blogging Journey with Us! 🚀"
              : "🌟 Let's Begin Your Blogging Journey! 🚀"}
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          {isAuthentificated ? (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Welcome, fellow writer and creator! 🌟 Whether you're here to
              share your story, document your experiences, or delve into your
              passions, you've come to the right place. At
              <span className="text-blue-500">BravoBlog</span>, we believe in
              the power of words and the magic of storytelling.
            </p>
          ) : (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Register now to take the first step towards establishing your
              online presence and join the exciting realm of blogging. Let's
              start this incredible journey together! 💻📝🌿
            </p>
          )}
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <Link
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800 group"
            to={isAuthentificated ? "/my-blogs" : "/register"}
          >
            {isAuthentificated
              ? "Create your blog now"
              : "Let's get started now"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="flex-shrink-0 size-5 group-hover:translate-x-2 transition duration-60"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
