import { createContext, useContext, useState } from 'react';

const visibleContext = createContext();

export const VisibleProvider = ({ children }) => {
  const [visiblity, setVisiblity] = useState(false);
  const [exVisiblity, setExVisiblity] = useState(false);
  const [edVisiblity, setEdVisiblity] = useState(false);
  const [skVisiblity, setSkVisiblity] = useState(false);
  const [ceVisiblity, setCeVisiblity] = useState(false);
  const [prVisiblity, setPrVisiblity] = useState(false);
  const [awVisiblity, setAwVisiblity] = useState(false);

  return (
    <visibleContext.Provider
      value={{
        visiblity,
        setVisiblity,
        exVisiblity,
        setExVisiblity,
        edVisiblity,
        setEdVisiblity,
        skVisiblity,
        setSkVisiblity,
        ceVisiblity,
        setCeVisiblity,
        prVisiblity,
        setPrVisiblity,
        awVisiblity,
        setAwVisiblity,
      }}
    >
      {children}
    </visibleContext.Provider>
  );
};

export const useVisible = () => {
  return useContext(visibleContext);
};
