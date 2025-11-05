import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeToggle } from "./theme-toggle";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwin Jakanathan | Portfolio",
  description: "Computer Engineering student.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 border-b border-[var(--card-border)]">
          <nav className="flex items-center justify-between px-12 py-6">
            <a href="/" className="text-x1 font-semibold tracking-tight">Ashwin Jakanathan</a>
            <div className="flex gap-6 items-center text-sm text-gray-300 dark:text-gray-600">
              <a href="/projects" className="hover:text-white dark:hover:text-black">Projects</a>
              <a href="/contact" className="hover:text-white dark:hover:text-black">Contact</a>
              <a href="/resume.pdf" className="hover:text-white dark:hover:text-black" target="_blank">Resume</a>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-[120rem] px-6 py-10 flex-1 w-full">
          <div className="bg-[var(--card-bg)] rounded-lg p-12 shadow-lg h-full">
            {children}
          </div>
        </main>

        <footer className="mx-auto w-full max-w-[120rem] px-6 py-6">
          © {new Date().getFullYear()} Ashwin
        </footer>
      </body>
    </html>
  );
}
