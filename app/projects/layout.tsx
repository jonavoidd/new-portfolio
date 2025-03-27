import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details | Developer Portfolio",
  description: "Detailed information about my development projects",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
