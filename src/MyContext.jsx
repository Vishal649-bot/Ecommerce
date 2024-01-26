import  { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const updateCartItems = (newItems) => {
    setCartItems(newItems);
  };

 

  return (
    <MyContext.Provider
      value={{
        cartItems,
        updateCartItems,
       
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };