import type { Metadata } from "next";
import { Ubuntu, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700", ],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const sourceSans3 = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-sans-3",
})

export const metadata: Metadata = {
  title: "CodeCrush",
  description: "Daily coding challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${ubuntu.variable} ${sourceSans3.variable}`}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
