import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") || headerStore.get("host") || "localhost:3000";
  const protocol = headerStore.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = protocol + "://" + host;
  const description = "Building AI capability across Miller so people can learn, improve work, and move good ideas forward responsibly.";

  return {
    title: "Enterprise AI Enablement | Miller",
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "Enterprise AI Enablement",
      description,
      type: "website",
      images: [{ url: origin + "/og-v2.png", width: 1672, height: 943, alt: "Enterprise AI Enablement working enterprise strategy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Enterprise AI Enablement",
      description,
      images: [origin + "/og-v2.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
