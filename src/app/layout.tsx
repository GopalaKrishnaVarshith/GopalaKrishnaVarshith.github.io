import type { Metadata, Viewport } from "next";
import { ABOUT_ME, BASE_URL, SOCIAL_LINKS } from "./constants/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: ABOUT_ME.name + " | Regulatory Technology & Workflow Automation",
    template: "%s | " + ABOUT_ME.name,
  },
  description:
    "Regulatory technology business analyst building trustworthy workflows across document QC, regulatory data, digital product delivery, and responsible AI.",
  applicationName: ABOUT_ME.name + " Portfolio",
  authors: [{ name: ABOUT_ME.name, url: BASE_URL }],
  creator: ABOUT_ME.name,
  publisher: ABOUT_ME.name,
  category: "Professional portfolio",
  keywords: [
    "Krishna Varshith R",
    "regulatory technology business analyst",
    "workflow automation",
    "regulatory automation",
    "document quality control",
    "responsible AI",
    "RIMS",
    "digital product delivery",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: ABOUT_ME.name + " | Regulatory Technology & Workflow Automation",
    description:
      "Business analysis, workflow automation, and responsible AI for regulated work.",
    url: BASE_URL,
    siteName: ABOUT_ME.name,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Krishna Varshith R — Regulatory technology and workflow automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_ME.name + " | Regulatory Technology & Workflow Automation",
    description:
      "Business analysis, workflow automation, and responsible AI for regulated work.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111b21" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@type": "Person",
    "@id": BASE_URL + "/#person",
    name: ABOUT_ME.name,
    url: BASE_URL,
    jobTitle: ABOUT_ME.title,
    image: BASE_URL + ABOUT_ME.profileImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    sameAs: [SOCIAL_LINKS.linkedin],
    knowsAbout: [
      "Regulatory technology",
      "Business analysis",
      "Workflow automation",
      "Document quality control",
      "RIMS",
      "Regulatory data integrity",
      "Responsible AI",
    ],
  };
  const website = {
    "@type": "WebSite",
    "@id": BASE_URL + "/#website",
    url: BASE_URL,
    name: ABOUT_ME.name + " — Portfolio",
    description:
      "Regulatory technology, workflow automation, business analysis, and responsible AI portfolio.",
    inLanguage: "en-IN",
    author: { "@id": BASE_URL + "/#person" },
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
