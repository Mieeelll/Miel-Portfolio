"use client";

import { useLoading } from "@/app/LoadingContext";

export default function HeroFadeInWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useLoading();
  return (
    <div
      className={loading ? "" : "hero-ready"}
      style={{ display: "contents" }}
      data-loading={loading ? "true" : "false"}
    >
      {children}
    </div>
  );
}
