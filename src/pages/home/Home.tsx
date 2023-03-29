import { Header } from "../../components";

const Home = () => {
  return (
    <section className="p-4 flex flex-col">
      <Header />
      <section className="grid grid-cols-3 p-10 gap-6">
        <section className="flex flex-col space-y-3 px-4">
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Supermarket</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Phones</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Sports Equipment</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Fashion</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Gaming</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Baby Products</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Appliances</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Health and Beauty</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Computing and TV</p>
          </a>
          <a href="/" className="flex items-center justify-between hover:text-blue-900">
            <p>Other Categories</p>
          </a>
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
