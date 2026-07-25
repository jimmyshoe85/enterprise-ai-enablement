import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miller AI Academy | Enterprise AI Enablement",
  description: "Practical learning for employees, managers, and leaders to build capability, improve work, and move responsibly with AI.",
};

export default function AcademyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
