import React from "react";
import {useNavigate } from "react-router-dom";
import { Context } from "../../context";

type Props={
  to:string,
  children: React.ReactNode,
  className?:string,
  linkProps?:React.HTMLProps<HTMLAnchorElement>
}

const Link:React.FC<Props> = ({to,children,className,linkProps}) => {
  const navigate = useNavigate();
  const { setLoading, setProgress } = React.useContext(Context);
  const startLoading = () => {
    setLoading(true); // Show loader when navigating
    const interval = setInterval(() => {
      setProgress((prevProgress: number) => {
        const increment = prevProgress >= 80 ? 100 - prevProgress : 10; // Increment by 10 until reaching 80%, then complete to 100%
        return prevProgress + increment;
      });
    }, 300); // Increment every 200 milliseconds (adjust as needed)
    setTimeout(() => {
      clearInterval(interval); // Clear interval after 2 seconds
      setLoading(false); // Hide loader after 2 seconds
      setProgress(0); // Reset progress
      navigate(to,{unstable_flushSync:true,unstable_viewTransition:true})
    }, 2000); // Wait for 2 seconds (adjust as needed)
  };
  return <a onClick={startLoading} className={className} {...linkProps}>
    {children}
  </a>;
};

export default Link;
