import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Service",
  description: "Authentication microservice"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
