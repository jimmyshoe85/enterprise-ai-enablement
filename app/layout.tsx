import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") || headerStore.get("host") || "localhost:3000";
  const protocol = headerStore.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = protocol + "://" + host;
  const description = "A practical field manual for understanding the enterprise AI strategy, choosing an Academy path, and finding the right source material.";

  return {
    title: "Enterprise AI Enablement | Miller",
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "Enterprise AI Enablement",
      description,
      type: "website",
      images: [{ url: origin + "/og.png", width: 1672, height: 943, alt: "Enterprise AI Enablement field manual" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Enterprise AI Enablement",
      description,
      images: [origin + "/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
