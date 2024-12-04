import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./page.module.css";
import '../../public/css/style2.css'
import {NextIntlClientProvider} from 'next-intl';
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  title: "O-Synthesis"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <head>
        <link rel="icon" type="image/x-icon" href="/Media/favicon.ico"/>
      </head>
      <body className="backgroundGeral">
        {children}
      </body>
    </html>
  );
}
