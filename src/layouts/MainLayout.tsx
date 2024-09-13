import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
