import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif, DM_Sans, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";
import BodyWithLoading from "./BodyWithLoading";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const instrument = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-loader-mono",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-doodle",
});

export const metadata: Metadata = {
  title: "Portfolio — Amiel John Metiam",
  description:
    "Amiel John Metiam — Web & Mobile Developer, QA. Building meaningful software with React, Node.js, Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${instrument.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${permanentMarker.variable}`}
    >
      <body className="antialiased">
        <BodyWithLoading>{children}</BodyWithLoading>
      </body>
    </html>
  );
}
