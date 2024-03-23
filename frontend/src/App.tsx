import { Outlet } from "react-router-dom";
import React from "react";
import Loader from "react-top-loading-bar";
import { Context } from "./context";
import { Navbar, Footer ,Blogs} from "./components/layouts";
import cookie from "js-cookie";

function App() {
  const { loading, progress, isAuthentificated, setIsAuthentificated } =
    React.useContext(Context);
  console.log(cookie.get("Auth"));

  React.useEffect(() => {
    setIsAuthentificated(cookie.get("Auth") ? true : false);
    if (isAuthentificated) {
      fetch("http://localhost:8000/v1/api/users/user", {
        headers: {
          Authorization: "Bearer" + cookie.get("Auth"),
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="py-3" />
      <Navbar />
      {loading ? (
        <Loader
          progress={progress}
          height={3}
          shadow={true}
          color="#27b8d9"
          shadowStyle={{ boxShadow: "4px 4px 2px #27b8d9" }}
        />
      ) : (
        <Outlet />
      )}
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
