import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Notion Clone – AI-Enhanced Markdown Workspace",
  description: "A powerful Notion-style editor for managing notes, docs, and ideas. Write with Markdown, use AI commands, and organize your digital workspace with ease.",
  keywords: [
    "Notion clone",
    "markdown editor",
    "AI note app",
    "block editor",
    "Notion alternative",
    "react editor",
    "workspace app",
    "task management",
    "note taking app",
    "Next.js markdown editor"
  ],

  openGraph: {
    title: "Notion Clone – AI-Enhanced Markdown Workspace",
    description:
      "Organize your thoughts like a pro with our Notion-style workspace. Write, format, and automate your notes using markdown and AI commands.",
    siteName: "Notion Clone",
    locale: "en_US",
    type: "website",
  },

  themeColor: "#000000",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
