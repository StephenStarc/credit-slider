import { useState } from "react";
import { Context } from "./Context";

// Define the type for the props of the ContextProvider component
type ContextProviderProps = {
  children: React.ReactNode; // Children components wrapped by the provider
};

// Define the credit amounts for different price options
const credits = {
  5: 500,
  10: 1200,
  15: 1700,
  20: 2500,
  25: 3900,
  30: 5000,
};


export default function ContextProvider({ children }: ContextProviderProps) {
  // State to manage the selected price
  const [price, setPrice] = useState<string>('10');

  // Calculate the current credit amount based on the selected price
  const credit = Object(credits)[price];

  return (
    // Provide the context value to the children components
    <Context.Provider value={{ price, setPrice, credits, credit }}>
      {children}
    </Context.Provider>
  );
}
