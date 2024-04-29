export default function Footer() {
  return (
    <footer className="section-x-padding flex justify-between bg-gray-800 py-8 font-montserrat text-white lg:py-16">
      <div className="col space-y-2">
        <h1>eShop</h1>
        <div></div>
      </div>
      <div className="col space-y-3">
        <h2 className="text-xl font-semibold">Help</h2>
        <a href="" className="">
          Track Order
        </a>
        <a href="">Return Policy</a>
      </div>
      <div className="col space-y-3">
        <h2 className="text-xl font-semibold">About</h2>
        <a href="">Terms and Conditions</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="col space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
      </div>
    </footer>
  );
}
