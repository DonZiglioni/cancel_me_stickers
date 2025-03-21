import NavBar from "./components/NavBar";
import "./globals.css";
import { StateContext } from "@/context/StateContext";

export const metadata = {
  title: "Cancel Me Stickers",
  description: "Generated by Don Z",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <StateContext>
          <header className="sticky top-0 bg-black">
            <NavBar />
          </header>
          {children}
        </StateContext>
      </body>
    </html>
  );
}
