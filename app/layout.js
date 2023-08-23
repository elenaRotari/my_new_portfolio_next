import "./globals.css";
import Layout from "./components/Layout";

export const metadata = {
  title: "Ellas Portfolio",
  description: "Done with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout children={children} />
      </body>
    </html>
  );
}
