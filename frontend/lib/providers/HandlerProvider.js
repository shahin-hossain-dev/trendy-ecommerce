import { createContext, useState } from "react";

export const HandlerContext = createContext();

const HandlerProvider = ({ children }) => {
  const [isToggleOpen, setToggleOpen] = useState(false);

  const handleDrawerOpen = (value) => {
    setToggleOpen(value);
  };

  const value = {
    isToggleOpen,
    handleDrawerOpen,
  };
  return (
    <HandlerContext.Provider value={value}>{children}</HandlerContext.Provider>
  );
};

export default HandlerProvider;
