import type { Metadata } from "next";
import "./globals.css";
import { Montserrat_Alternates, Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Stanley Ifeoha - Web Developer",
  description:
    "I'm a web developer based in Lagos, Nigeria. I specialize in building websites and web applications.",
  keywords: [
    "Stanley Ifeoha",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "Node.js Developer",
    "HTML5 Developer",
    "Lagos",
    "Nigeria",
    "Web Development",
  ],
  authors: [
    { name: "Stanley Ifeoha", url: "https://stanleyifeoha.netlify.app/" },
  ],
  openGraph: {
    title: "Stanley Ifeoha - Web Developer",
    description:
      "I'm a web developer based in Lagos, Nigeria. I specialize in building websites and web applications.",
    url: "https://stanleyifeoha.netlify.app/",
    siteName: "Stanley Ifeoha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stanley Ifeoha - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanley Ifeoha - Web Developer",
    description:
      "I'm a web developer based in Lagos, Nigeria. I specialize in building websites and web applications.",
    creator: "@luke_stancee", // Replace with your Twitter handle.
    images: ["/og-image.png"], // Replace with the actual path.
  },
};

const montserrat = Montserrat_Alternates({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--montserrat",
});

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://stanleyifeoha.netlify.app/" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stanley Ifeoha",
              url: "https://stanleyifeoha.netlify.app/",
              sameAs: [
                "https://github.com/stanstancee",
                "https://x.com/luke_stancee",
              ],
              jobTitle: "Web Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <main>{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
