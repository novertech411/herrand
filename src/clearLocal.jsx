import { useEffect } from "react";

const ClearLocalStorageOnInactivity = ({ children }) => {
  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        localStorage.clear();
      }, 1 * 60 * 1000); // 10 minutes in milliseconds
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>{children}</div>;
};

export default ClearLocalStorageOnInactivity;
