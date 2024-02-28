//libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'

//context
import ContextComponent from './context'

//Router
import { router } from './Router.tsx'

//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextComponent>
      <RouterProvider router={router}/>
    </ContextComponent>
  </React.StrictMode>,
)
