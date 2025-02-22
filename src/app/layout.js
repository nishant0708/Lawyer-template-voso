import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import { getBusinessDetails } from "@/Components/apicall";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const colorScheme = {
    primary: "#1e2e45",
    background: "#e8e9e1",
    secondary: "#9a9162",
    ternary: "#6f4e37",
    primary_text: "#fff",
    secondary_text: "#3A3A38",
  };
  const businessData = await getBusinessDetails("justicejunction");
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          " --color-background": colorScheme.background,
          "--color-primary": colorScheme.primary,
          "--color-secondary": colorScheme.secondary,
          "--color-ternary": colorScheme.ternary,
          "--color-text-primary": colorScheme.primary_text,
          "--color-text-secondary": colorScheme.secondary_text,
        }}
      >
        <Navbar data={businessData} />
        {children}
        <Footer data={businessData} />
      </body>
    </html>
  );
}
