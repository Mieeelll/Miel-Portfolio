"use client";

import { createContext, useContext, useState, useCallback } from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const value = { loading, setLoading: useCallback((v: boolean) => setLoading(v), []) };
  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  return ctx ?? { loading: false, setLoading: () => {} };
}
