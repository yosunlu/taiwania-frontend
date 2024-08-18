import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";


const notosans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notosans.className} bg-emerald-50/[75%] `}>
        <div
          className="
          bg-[#6ee7b7]/50 absolute top-[-6rem] left-1/2 transform -translate-x-1/2 
          -z-10 h-[20rem] w-[31.25rem] rounded-full blur-[5rem] sm:w-[68.75rem]"
        > </div>
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
        
      </body>
    </html>
  );
}
