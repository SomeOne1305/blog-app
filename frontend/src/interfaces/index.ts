export interface IUser{
  _id:string,
  name:string,
  surname:string,
  email:string,
  password:string,
  
}
export interface IContext{
  isAuthentificated:boolean,
  theme:"dark"|"light",
  user:IUser,
  progress:number,
  loading:boolean
  setIsAuthentificated: React.Dispatch<React.SetStateAction<boolean>>,
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>,
  setUser: React.Dispatch<React.SetStateAction<IUser>>,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>,
  setProgress:React.Dispatch<React.SetStateAction<number>>,
}
