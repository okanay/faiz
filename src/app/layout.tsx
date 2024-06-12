import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/providers";
import chakraPetch from "@/assets/fonts/chakra-petch";

export const metadata: Metadata = {
  title: "Taksitli Alışveriş Faiz Kazancı Hesaplama",
  description:
    "Vade Farkı Olmadan Yapılan Taksitli Alışverişlerde Faiz Kazançı Hesaplama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
