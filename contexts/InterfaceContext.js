import { createContext, useEffect, useState } from "react";

const InterfaceContext = createContext();

const InterfaceProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    color: "",
  });

  const setToast = (message, color) => {
    setStatus({
      expanded: true,
      message: message,
      color: color,
    });
    setTimeout(function () {
      setStatus({
        expanded: false,
        message: "",
        color: "",
      });
    }, 5000);
  };

  useEffect(() => {}, []);

  return (
    <InterfaceContext.Provider
      value={{
        expanded,
        setExpanded,
        setToast,
        status,
      }}
    >
      {children}
    </InterfaceContext.Provider>
  );
};

export { InterfaceProvider, InterfaceContext };
