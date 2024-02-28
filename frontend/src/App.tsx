import { Outlet } from "react-router-dom";
import React from "react";
import Loader from "react-top-loading-bar";
import { Context } from "./context";
import { Navbar } from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  const { loading, progress } = React.useContext(Context);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="py-3"/>
      <Navbar />
      <h1 className="text-2xl text-blue-500">Hello world</h1>
      {loading ? (
        <Loader progress={progress} height={3} shadow={true} color="#27b8d9" shadowStyle={{boxShadow:"0 4px 4px 2px #27b8d9"}}/>
      ) : (
        ""
      )}
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
