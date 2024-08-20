import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 5000;
  const tax = 100;
  const [price, setPrice] = useState(ticketPrice);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function increaseQuantity() {
    setQuantity(quantity + 1);
    setPrice((quantity + 1) * ticketPrice);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
    setPrice((quantity - 1) * ticketPrice);
  }

  const valueToShare = {
    quantity,
    price,
    fullName,
    email,
    phone,
    tax,
    setFullName,
    setEmail,
    setPhone,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <GlobalContext.Provider value={valueToShare}>
      {children}
    </GlobalContext.Provider>
  );
};
