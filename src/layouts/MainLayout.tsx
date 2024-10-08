import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <Categories />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
