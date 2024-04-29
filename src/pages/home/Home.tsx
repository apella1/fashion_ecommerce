import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { categories } from "../../data/categories";

const Home = () => {
  return (
    <section className="flex flex-col">
      <Header />
      <section className="section-x-padding grid min-h-screen grid-cols-3 gap-6 py-8 lg:py-12">
        <section className="flex flex-col space-y-3 px-4">
          <h2 className="pb-4 text-2xl font-semibold text-blue-800">
            Top Categories
          </h2>
          {categories.map((category) => (
            <a
              href={category.link}
              key={category.name}
              className="flex items-center space-x-4 hover:text-blue-900"
            >
              <div className="text-xl">{category.icon}</div>
              <p>{category.name}</p>
            </a>
          ))}
        </section>
        <div></div>
        <div></div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
