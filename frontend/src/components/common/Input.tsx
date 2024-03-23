import { IonIcon } from "@ionic/react";
import React, { InputHTMLAttributes } from "react";
import {eyeOffOutline,eyeOutline} from 'ionicons/icons'

type Props = {
  id: string;
  label: string;
  background:string,
  type:React.HTMLInputTypeAttribute
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ id, label,type,background, ...rest }) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [haveValue, setHaveValue] = React.useState<boolean>(false);
  const [inputType,setInputType] = React.useState<React.HTMLInputTypeAttribute>(type);
  const [show,setShow] = React.useState<boolean>(!(inputType==="password"))
  const [value,setValue] = React.useState<string>("");
  React.useLayoutEffect(()=>{
    value.length > 0 ? setHaveValue(true) : setHaveValue(false)
  },[isFocused])
  const showPass = ()=>{
    setShow(!show)
    setInputType(inputType === "password" ? "text" : type)
  }
  return (
    <div className="relative flex w-full max-sm:mr-0 mr-2">
      <input
        type={inputType}
        id={id}
        {...rest}
        className="peer w-full bg-transparent border dark:focus:border-[#0ea5e9] rounded-md border-[#e2e8f0] dark:border-[#334155] p-2 placeholder:text-transparent outline-none  focus:border-[#0ea5e9]"
        placeholder=""
        value={value}
        onInput={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
      />
      {
        type === "password" ? (
          <div className="px-2 py-1 w-8 absolute right-1 top-2 rounded-md cursor-pointer pb-0 hover:bg-slate-100" onClick={showPass}>
            <IonIcon icon={show ? eyeOffOutline : eyeOutline}/>
          </div>
        ):""
      }
      <label
        htmlFor={id}
        className={`absolute select-none left-1 ml-1 top-2.5 ${"bg-"+background} dark:bg-inDark px-1 text-[#94a3b8] text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-md peer-focus:text-[#0ea5e9] ${haveValue && !isFocused ? "text-md text-[#0ea5e9] -translate-y-5 ml-1 px-1" :""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
