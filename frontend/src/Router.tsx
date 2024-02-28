import {createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Link } from "./components/common";
import { ErrorPage } from "./components/layouts";

export const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage/>,
    element:<App/>,
    children:[
      {
        path:"",
        element:<div>this is main page <Link to="/about" className="text-blue-700">About</Link></div>
      },
      {
        path:"about",
        element:<div>this is about page <Link to='/'>Home</Link></div>
      }
    ]
  }
])