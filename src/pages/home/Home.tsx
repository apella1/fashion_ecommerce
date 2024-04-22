import Header from "../../components/Header";
import { categories } from "../../data/categories";

const Home = () => {
  return (
    <section className="p-4 flex flex-col">
      <Header />
      <section className="grid grid-cols-3 p-10 gap-6">
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
    </section>
  );
};

export default Home;
