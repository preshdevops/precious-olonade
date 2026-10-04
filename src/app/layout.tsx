import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precious Oluwasegun Olonade - Product Builder & Computer Scientist",
  description:
    "Computer Scientist and product builder. Designing and engineering software and products that solve real-world problems.",
  metadataBase: new URL("https://precious-olonade.netlify.app"),
  openGraph: {
    title: "Precious Oluwasegun Olonade - Product Builder & Computer Scientist",
    description:
      "Independent product builder and Computer Scientist. Selected work includes Dabaar, editorial-muse, Curious Bright, Privora, and Makarios.",
    url: "https://precious-olonade.netlify.app",
    siteName: "Precious Oluwasegun Olonade",
    type: "website",
    images: ["/me.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precious Oluwasegun Olonade - Product Builder",
    description:
      "Computer Scientist building products that solve real-world problems. Build with intention. Ship with purpose.",
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
    name: "Precious Oluwasegun Olonade",
    url: "https://precious-olonade.netlify.app",
    jobTitle: "Product Builder & Computer Scientist",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Osun State University",
    },
    sameAs: [
      "https://github.com/preshdevops",
      "https://www.linkedin.com/in/precious-olonade/",
      "https://preciouswrites.vercel.app",
    ],
    knowsAbout: [
      "Product Development",
      "Software Engineering",
      "Computer Science",
      "React",
      "Next.js",
      "Django",
      "PostgreSQL",
      "Kotlin",
      "Rust",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="p:domain_verify" content="13e5b81713a7bd1485cad7146cb39b7c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;500;600&family=Spectral:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0B0C0E] text-[#F4F4F6]">{children}</body>
    </html>
  );
}
