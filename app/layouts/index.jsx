import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <header className="border-b">
        <Navbar />
      </header>
      <main className="container flex flex-grow mx-auto mt-8">{children}</main>
      <Footer />
    </>
  );
}
