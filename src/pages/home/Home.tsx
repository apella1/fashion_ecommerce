import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { categories } from "../../data/categories";

const Home = () => {
  return (
    <section className="flex flex-col">
      <Header />
      <section className="grid min-h-screen grid-cols-3 gap-6 p-10">
        <section className="flex flex-col space-y-3 px-4">
          {categories.map((category) => (
            <a
              href={category.link}
              key={category.name}
              className="flex items-center justify-between hover:text-blue-900"
            >
              <p>{category.name}</p>
            </a>
          ))}
        </section>
        <div>
          <p>Sliding images go here</p>
        </div>
        <div>
          <p>Other Section</p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
