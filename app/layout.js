import "./globals.css";
import Motion from "./components/MotionDiv";
import TopLeftImg from "./components/TopLeftImg";
import Nav from "./components/Nav";
import Header from "./components/Header";

export const metadata = {
  title: "Ellas Portfolio",
  description: "Done with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
          <Motion className="h-full">
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
          </Motion>
        </div>
      </body>
    </html>
  );
}
