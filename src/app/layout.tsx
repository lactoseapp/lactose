import "./globals.css";

export const metadata = {
  title: "Lactose",
  description:
    "An offline-first markdown note-taking app with privacy and simplicity in mind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
