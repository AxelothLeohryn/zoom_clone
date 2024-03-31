import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head"; // Import the Head component
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zoom Clone</title>
      </Head>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/logo.svg",
            socialButtonsVariant: "auto",
            logoPlacement: "outside",
            shimmer: true,
          },
          variables: {
            colorText: "white",
            colorPrimary: "#3ad305",
            colorBackground: "#191b1f",
            colorInputBackground: "#171c1e",
            colorInputText: "white",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-1`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
