import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HSPおすすめサービス",
  description: "HSP（Highly Sensitive Person）の方向けの厳選されたサービスをご紹介",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
