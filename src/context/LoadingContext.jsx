import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  isLoaded: false,
  setIsLoaded: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 