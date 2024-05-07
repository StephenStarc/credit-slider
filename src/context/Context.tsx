import { createContext } from "react";

type ContextData = {
  price: string; // Current price
  setPrice: (price: string) => void; // Function to set the price
  credits: { // Credit amounts for different price options
    5: number;
    10: number;
    15: number;
    20: number;
    25: number;
    30: number;
  };
  credit: number; // Current credit amount
};

// Create the context with default values
export const Context = createContext<ContextData>({
  price: '10', // Default price
  setPrice: () => {}, // Default function to set the price
  credits: { // Default credit amounts
    5: 500,
    10: 1200,
    15: 1700,
    20: 2500,
    25: 3900,
    30: 5000,
  },
  credit: 1200, // Default credit amount
});
