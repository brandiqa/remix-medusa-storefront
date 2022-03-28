import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <header className="border-b">
        <Navbar />
      </header>
      <main className="container flex justify-center flex-grow mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
