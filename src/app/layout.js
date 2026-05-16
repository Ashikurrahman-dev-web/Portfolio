import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollButtons from "@/components/ScrollButtons";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  applicationName: "Ashikur Rahman Portfolio",
  title: {
    default: "Ashikur Rahman | Portfolio – Full-Stack Developer Bangladesh",
    template: "%s | Ashikur Rahman"
  },
  description: "Ashikur Rahman is a professional Full-Stack Developer from Dhaka, Bangladesh. Specializing in React, Next.js, Express.js and Node.js to build modern web applications.",
  keywords: [
    "Ashikur Rahman",  "Ashik developer", "MD Ashik",
    "Md. Ashikur Rahman",  "Md Ashik developer",
     "Ashik",
    "Dhaka Developer", "Barishal Developer", "Dhaka Developer",
    "Ashik Full Stack Developer", "Ashik Bangladesh developer",
    "Full Stack Developer Bangladesh", "Frontend Developer Dhaka",
    "Backend Developer Dhaka", "Web Developer Dhaka",
     "React Developer Bangladesh",
    "Next.js developer Bangladesh", "Node.js developer Bangladesh",
      "Express.js developer Bangladesh",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};
export default function RootLayout({ children }) {
return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden`}>
        <Providers>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </Providers>
        
      </body>
    </html>
  );
};