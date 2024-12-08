import { createContext, useContext, useState } from 'react';

const visibleContext = createContext();

export const VisibleProvider = ({ children }) => {
  const [visiblity, setVisiblity] = useState(false);

  return (
    <visibleContext.Provider value={{ visiblity, setVisiblity }}>
      {children}
    </visibleContext.Provider>
  );
};

export const useVisible = () => {
  return useContext(visibleContext);
};
