import React from "react";
import { Context } from "../context";
export const startLoading = () => {
  const { setLoading, setProgress } = React.useContext(Context);
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
    
  }, 2000); // Wait for 2 seconds (adjust as needed)
};
