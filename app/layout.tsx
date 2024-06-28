import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Blog App",
  description: "Deniz Gökbudak tarafından yapılmıştır",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
