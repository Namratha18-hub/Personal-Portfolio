import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namratha Sanapala | Software Developer",
  description: "Portfolio of Namratha Sanapala, a Computer Science and Engineering undergraduate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
