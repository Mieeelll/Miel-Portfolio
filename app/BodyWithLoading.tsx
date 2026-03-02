"use client";

import { LoadingProvider } from "./LoadingContext";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export default function BodyWithLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <Loader />
      <CustomCursor />
      {children}
    </LoadingProvider>
  );
}
