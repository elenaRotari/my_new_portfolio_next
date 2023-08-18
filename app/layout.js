import Header from "./components/Header";
import Nav from "./components/Nav";
import TopLeftImg from "./components/TopLeftImg";
import "./globals.css";

export const metadata = {
  title: "Ellas Portfolio",
  description: "Created with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
