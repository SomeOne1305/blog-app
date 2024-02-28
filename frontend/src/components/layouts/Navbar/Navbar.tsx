import React from 'react'
import { Context } from '../../../context'
import NoAuth from './NoAuth'
import YesAuth from './YesAuth'
import cookie from 'js-cookie'
import { IonIcon } from '@ionic/react'
import { moonOutline } from 'ionicons/icons'
import { icon48 } from '../../../assets'

const Navbar = () => {
  const {isAuthentificated,setIsAuthentificated} = React.useContext(Context)
  setIsAuthentificated(cookie.get('Auth')?true:false)
  return (
    <nav className="w-full bg-primary fixed top-0 left-0 shadow-md">
      <div className="container py-2 max-md:py-1 flex items-center justify-between">
        <a href="#" className="inline-flex items-center">
          <img src={icon48} alt="logo" />
          <h1 className="text-xl text-white">BravoBlog</h1>
        </a>
        <div className="p-1 inline-flex items-center">
          <div className="p-1 pb-0 group mx-2 cursor-pointer hover:bg-[#393848fc] rounded-md">
            <IonIcon icon={moonOutline} className='text-xl text-white group-hover:text-blue-500 md hydrated' role='img'/>
          </div>
          {
            isAuthentificated?(<YesAuth/>):(<NoAuth/>)
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar