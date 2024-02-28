import { ReactElement, createContext, useState } from "react";
import { IContext, IUser } from "../interfaces";

export const Context = createContext<IContext>({
  isAuthentificated: false,
  theme: "light",
  user: {name:'User',surname:'',email:"",password:"",_id:""},
  progress:0,
  loading:false,
  setIsAuthentificated: () => {},
  setTheme: () => {},
  setUser: () => {},
  setProgress:()=>{},
  setLoading:()=>{}
});
type props = {
  children: ReactElement;
};
const ContextComponent = ({ children }: props): JSX.Element => {
  const [isAuthentificated, setIsAuthentificated] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<IUser>({name:'User',surname:'',email:"",password:"",_id:""});
  const [loading,setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  return (
    <Context.Provider
      value={{
        isAuthentificated,
        theme,
        user,
        progress,
        loading,
        setIsAuthentificated,
        setTheme,
        setUser,
        setLoading,
        setProgress
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextComponent;
