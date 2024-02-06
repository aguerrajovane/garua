import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Navbar />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
