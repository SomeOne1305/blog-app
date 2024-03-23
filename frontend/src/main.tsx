//libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";


//context
import ContextComponent from "./context";

//Router
import {router } from "./Router";

//styles
import "./index.css";

const client = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextComponent>
      <QueryClientProvider client={client}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </ContextComponent>
  </React.StrictMode>
);
