import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Article, Blogs, ErrorPage } from "./components/layouts";
import { BlogsPage, Home, Login, Register } from "./components/pages";

export const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage/>,
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"blogs",
        element:<BlogsPage/>,
        children:[
          {
            path:"all",
            index:true,
            element:<Blogs/>
          },
        ]
      },
      {
        path:"blog",
        element:<BlogsPage/>,
        children:[
          {
            path:":id",
            element:<Article/>
          }
        ]
      }
    ]
  }
])

// export const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" errorElement={<ErrorPage />} element={<App />}>
//         <Route path="" element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="blogs" element={<BlogsPage />}>
//           <Route path="" element={<Blogs />}/>
//           <Route path="/blog" element={<Article />}>
//             <Route path="/:id" element={<div></div>}/>
//           </Route>
//         </Route>
//       </Route>
//     </Routes>
//   );
// };
