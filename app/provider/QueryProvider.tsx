"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Define the props type
interface ReactqProviderProps {
  children: ReactNode;
}

const QueryProvider: React.FC<ReactqProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default QueryProvider;
