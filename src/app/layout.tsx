import type { Metadata, Viewport } from "next";
import {
  ABOUT_ME,
  BASE_URL,
  IS_PUBLIC_SITE,
  SOCIAL_LINKS,
} from "./constants/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: ABOUT_ME.name + " | Regulatory Technology & Workflow Automation",
    template: "%s | " + ABOUT_ME.name,
  },
  description:
    "Regulatory technology business analyst building trustworthy workflows across document QC, regulatory data, digital product delivery, and responsible AI.",
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
  alternates: IS_PUBLIC_SITE ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    title: ABOUT_ME.name + " | Regulatory Technology & Workflow Automation",
    description:
      "Business analysis, workflow automation, and responsible AI for regulated work.",
    url: BASE_URL,
    siteName: ABOUT_ME.name,
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_ME.name + " | Regulatory Technology & Workflow Automation",
    description:
      "Business analysis, workflow automation, and responsible AI for regulated work.",
    images: ["/opengraph-image"],
  },
  robots: { index: IS_PUBLIC_SITE, follow: IS_PUBLIC_SITE },
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
    "@context": "https://schema.org",
    "@type": "Person",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
