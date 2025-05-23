import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIYORCODER  |  Diyorbek G'aybullayev - Web Developer ",
  description: "Explore the personal portfolio of Diyorbek G'aybullayev — a skilled frontend developer, freelancer, and mentor specializing in React and modern web technologies.",
  keywords: [
    "Diyorbek G'aybullayev",
    "Frontend Developer Uzbekistan",
    "React Developer",
    "Portfolio",
    "Vercel portfolio",
    "JavaScript Developer",
    "Next.js portfolio",
  ],
  authors: [{ name: "Diyorbek G'aybullayev", url: "https://diyorcoder.uz" }],
  creator: "Diyorbek G'aybullayev",
  robots: "index, follow",
  openGraph: {
    title: "DIYORCODER  |  Diyorbek G'aybullayev - Web Developer",
    description: "Frontend developer, freelancer and mentor from Uzbekistan. View my work and contact me today.",
    url: "https://diyorcoder.uz",
    siteName: "Diyor Coder",
    images: [
      {
        url: "https://diyorcoder.uz/og-image.jpg", // Saytingizda mavjud rasm bo‘lishi kerak
        width: 1200,
        height: 630,
        alt: "Diyor Coder Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyor Coder | Frontend Developer Portfolio",
    description: "Check out Diyorbek's projects, skills and contact info.",
    creator: "@diyorcoder", // Agar Twitter bor bo‘lsa
    images: ["https://diyorcoder.uz/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
