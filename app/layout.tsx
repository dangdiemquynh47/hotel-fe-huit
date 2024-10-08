import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta
          name="dmca-site-verification"
          content="WFJudWxDeDhpVEJuUmdxSk5RSkd4Zz090"
        />
        <meta property="fb:app_id" content="923095652725199"></meta>
        {/* <link rel="canonical" href="https://ielts1984.vn/"></link> */}
      </head>

      <body
        className={
          lexend.className + " bg-black min-h-screen mb-[84px] xl:mb-0 relative"
        }
      >
        <Header />
        <main className="z-0 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
