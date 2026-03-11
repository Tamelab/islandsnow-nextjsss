// src/app/layout.tsx
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Providers from './providers';

export const metadata: Metadata = {
  title: "Island Snow",
  description: "Island Snow e-commerce site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}  {/* This is where your page.tsx will render */}
        </Providers>
      </body>
    </html>
  );
}