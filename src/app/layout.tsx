import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ava by Abodie",
  description: "Your team’s smart assistant — always on, always learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
