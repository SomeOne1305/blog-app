import React from "react";
import { Context } from "../../../context";
import {IonIcon} from '@ionic/react'
import {moon} from 'ionicons/icons'

const YesAuth: React.FC = () => {
  const { user } = React.useContext(Context);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const dropdownMenu = [
    {
      icon: "",
      title: "My blogs",
    },
    {
      icon: "",
      title: "Settings",
    },
    {
      icon: "",
      title: "Log Out",
    },
  ];
  console.log(dropdownMenu);

  return (
    <div className="w-10 h-10 rounded-full ml-3 bg-pink-500 relative flex items-center justify-center cursor-pointer ring-4 ring-transparent hover:ring-blue-500/[.50] transition duration-500 parent" onClick={()=>setIsOpen(!isOpen)}>
      <p className="text-xl tracking-wide select-none text-white">
        {(user.surname[0] + user.name[0]).toLocaleUpperCase()}
      </p>
    <IonIcon icon={moon}/>
      <div className="child absolute top-[119%] right-0 p-1 z-10 rounded bg-[rgba(0,0,0)]">
        <div className="relative">
          <div className="w-3 h-3 rotate-45 -z-10 absolute top-[-42%] right-[7%] bg-[rgba(0,0,0)]"></div>
          <span className="text-gray-300 font-consolas whitespace-nowrap text-sm mt-1">
            {user?.surname + " " + user?.name}
          </span>
        </div>
      </div>
      {/* Dropdown menu */}
      {isOpen ? (
        <div className="flex flex-col absolute top-[120%] right-0 bg-white rounded-md p-1 border border-gray-200">
          <div className="flex items-center py-1 px-2 rounded-sm group hover:bg-gray-100">
            {/* <ion-icon name="document-outline" className="text-xl text-gray-700 group-hover:text-blue-500"></ion-icon> */}
            <span className="text-md text-gray-700 whitespace-nowrap group-hover:text-blue-500 ml-3">
              My blogs
            </span>
          </div>
          <div className="flex items-center py-1 px-2 rounded-sm group hover:bg-gray-100">
            {/* <ion-icon name="settings-outline" className="text-xl text-gray-700 group-hover:text-blue-500"></ion-icon> */}
            <span className="text-md text-gray-700 whitespace-nowrap group-hover:text-blue-500 ml-3">
              settings
            </span>
          </div>
          <div className="w-full h-px bg-gray-200 my-1"></div>
          <div className="flex items-center py-1 px-2 rounded-sm group hover:bg-gray-100">
            {/* <ion-icon name="log-out-outline" className="text-xl text-red-500 group-hover:text-red-600"></ion-icon> */}
            <span className="text-md text-red-500 whitespace-nowrap group-hover:text-red-600 ml-3">
              Log out
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default YesAuth;
