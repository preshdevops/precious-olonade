import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precious Olonade — Son & Potter | Full-Stack Developer",
  description:
    "Full-stack developer and CS student based in Nigeria. Building web and mobile products at the intersection of faith, craft, and real utility.",
  metadataBase: new URL("https://precious-olonade.netlify.app"),
  openGraph: {
    title: "Precious Olonade — Son & Potter",
    description:
      "Full-stack developer building privacy-first platforms, community apps, and beautiful interfaces.",
    url: "https://precious-olonade.netlify.app",
    siteName: "Precious Olonade",
    type: "website",
    images: ["/me.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precious Olonade — Son & Potter",
    description:
      "Full-stack developer and CS student building things that matter.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
