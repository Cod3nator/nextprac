import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/component/Headers";
import Footer from "@/component/Footer";
import Head from "next/head";
import Script from "next/script";
import { NotificationProvider } from "@/component/NotificationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Morfeus",
  description: "A film and production company",
};

export default function RootLayout({ children }) {


  return (
 <NotificationProvider>
     <html lang="en"  style={{scrollBehavior:'smooth'}}>
      
      <Head>
        {/* <Script src="https://www.youtube.com/iframe_api"></Script> */}
      </Head>
      <body className={inter.className}>
        <Headers/>
        {children}
        <Footer/>
        </body>
        
    </html>
 </NotificationProvider>
  );
}
