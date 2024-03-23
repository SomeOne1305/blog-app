import React from 'react'
import { Context } from '../../../context'
import NoAuth from './NoAuth'
import YesAuth from './YesAuth'
import { IonIcon } from '@ionic/react'
import { moonOutline } from 'ionicons/icons'
import { icon48 } from '../../../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {isAuthentificated} = React.useContext(Context)
  // const startloading = () =>{
  //   setLoading(true); // Show loader when navigating
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress: number) => {
  //       const increment = prevProgress >= 80 ? 100 - prevProgress : 10; // Increment by 10 until reaching 80%, then complete to 100%
  //       return prevProgress + increment;
  //     });
  //   }, 300); // Increment every 200 milliseconds (adjust as needed)
  //   setTimeout(() => {
  //     clearInterval(interval); // Clear interval after 2 seconds
  //     setLoading(false); // Hide loader after 2 seconds
  //     setProgress(0); // Reset progress
      
  //   }, 2000); // Wait for 2 seconds (adjust as needed)
  // }
  

  return (
    <nav className="w-full bg-primary fixed top-0 left-0 shadow-md z-50">
      <div className="container py-2 max-md:py-1 flex items-center justify-between">
        <Link to='/' className="inline-flex items-center">
          <img src={icon48} alt="logo" />
          <h1 className="text-xl text-white">BravoBlog</h1>
        </Link>
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