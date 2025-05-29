import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diyorbek G'aybullayev - Web Developer ",
  description: "Explore the personal portfolio of Diyorbek G'aybullayev — a skilled frontend developer, freelancer, and mentor specializing in React and modern web technologies.",
  keywords: [
    "Diyorbek G'aybullayev",
    "Diyor",
    "Dasturchi",
    "Web dasturchi Uzbekiston",
    "Dasturlash",
    "Dasturchi",
    "Frontend Dasturchi",
    "Web dasturchi",
    "Frontend dasturchi O'zbekiston",
    "Diyorbek G'aybullayev O'zbekistonda",
    "Diyorbek G'aybullayev frontend dasturchi",
    "Uzbekistondagi eng kuchli dasturchi",
    "DiyorCoder Portfolio",
    "React dasturchi",
    "JavaScript dasturchi",
    "Next.js dasturchi",
    "DiyorCoder",
    "Portfolio",
    "Diyorbek",
    "G'aybullayev",
    "DiyorCoder",
    "Web Developer",
    "Web Developer Uzbekistan",
    "Frontend Developer",
    "Frontend Developer Portfolio",
    "Diyorbek G'aybullayev Portfolio",
    "Diyorbek G'aybullayev Portfolio Uzbekistan",
    "Diyorbek G'aybullayev Frontend Developer",
    "Frontend Developer Uzbekistan",
    "React Developer",
    "Portfolio",
    "Vercel portfolio",
    "JavaScript Developer",
    "Next.js portfolio",
    "Диёрбек Гайбуллаев",
    "Диёр",
    "Портфолио DiyorCoder",
    "DiyorCoder",
    "Портфолио",
    "Гайбуллаев",
    "Веб разработчик",
    "Веб разработчик Узбекистан",
    "Frontend-разработчик",
    "Портфолио Frontend-разработчика",
    "Портфолио Диёрбека Гайбуллаева",
    "Диёрбек Гайбуллаев Узбекистан",
    "Диёрбек Гайбуллаев Frontend-разработчик",
    "Frontend-разработчик в Узбекистане",
    "React-разработчик",
    "JavaScript-разработчик",
    "Портфолио Next.js",
    "Портфолио Vercel",
  ],
  authors: [{ name: "Diyorbek G'aybullayev", url: "https://diyorcoder.uz" }],
  creator: "Diyorbek G'aybullayev",
  robots: "index, follow",
  openGraph: {
    title: "DiyorCoder | Diyorbek G'aybullayev - Web Developer",
    description: "Frontend developer, freelancer and mentor from Uzbekistan. View my work and contact me today.",
    url: "https://diyorcoder.uz",
    siteName: "Diyor Coder",
    images: [
      {
        url: "https://diyorcoder.uz/og-image.jpg", // Saytingizda mavjud rasm bo‘lishi kerak
        width: 1200,
        height: 630,
        alt: "DiyorCoder Portfolio Preview",
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
      <Script
        id="replain-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.replainSettings = { id: '22025654-1c72-4f5b-9c20-e73aeab3306f' };
            (function(u){
              var s=document.createElement('script');s.async=true;s.src=u;
              var x=document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
          `,
        }}
      />


      
    </html>
  );
}
