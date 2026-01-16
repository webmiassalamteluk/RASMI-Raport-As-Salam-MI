export const metadata = {
  title: "RASMI - Raport As Salam MI",
  description: "Sistem Raport Digital MI As Salam Teluk"
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
