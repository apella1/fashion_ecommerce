export default function Footer() {
  return (
    <footer className="section-x-padding flex justify-between bg-gray-200 py-8 font-montserrat text-sm text-black lg:py-16">
      <div className="col space-y-2">
        <a href="/" className="font-montserrat text-3xl font-semibold">
          FE.<span className="text-gray-300">shop</span>
        </a>
      </div>
      <div className="col space-y-3">
        <h2 className="text-lg font-semibold">Help</h2>
        <a href="" className="">
          Track Order
        </a>
        <a href="">Return Policy</a>
      </div>
      <div className="col space-y-3">
        <h2 className="text-lg font-semibold">About</h2>
        <a href="">Terms and Conditions</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="col space-y-3">
        <h2 className="text-lg font-semibold">Contact</h2>
      </div>
    </footer>
  );
}
