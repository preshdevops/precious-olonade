import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precious Olonade — Full-Stack Developer",
  description:
    "Full-stack developer and CS student based in Nigeria. Building web and mobile products at the intersection of faith, craft, and real utility.",
  metadataBase: new URL("https://precious-olonade.netlify.app"),
  openGraph: {
    title: "Precious Olonade — Full-Stack Developer",
    description:
      "Full-stack developer building privacy-first platforms, community apps, and beautiful interfaces.",
    url: "https://precious-olonade.netlify.app",
    siteName: "Precious Olonade",
    type: "website",
    images: ["/me.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precious Olonade — Full-Stack Developer",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Precious Olonade",
    url: "https://precious-olonade.netlify.app",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/preshdevops",
      "https://www.linkedin.com/in/precious-olonade/",
      "https://preciouswrites.vercel.app",
    ],
    knowsAbout: ["Full-Stack Web Development", "React", "Next.js", "Django", "PostgreSQL", "Tailwind CSS", "Python"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

