import { CiDeliveryTruck } from "react-icons/ci";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import ReviewCard from "./ReviewCard";

export default function ProductCard() {
  return (
    <section className="section-x-padding flex flex-col space-y-4">
      <div className="flex items-center space-x-4 text-xs text-gray-600">
        <p>Clothes and shoes</p>
        <div className="rounded-full  bg-gray-400 p-[3px]"></div>
        <p>Shoes</p>
        <div className="rounded-full  bg-gray-400 p-[3px]"></div>
        <p>Rebook</p>
      </div>
      <section className="flex space-x-4">
        {/* images */}
        <div className="basis-1/2">
          <div>Main Pic</div>
          <div className="flex items-center space-x-4">Other pics</div>
        </div>
        {/* details */}
        <div className="flex basis-1/2 flex-col space-y-4">
          <p className="text-lg font-semibold text-black">Product Title</p>
          <div className="flex items-center">
            <p>stars</p>
            <p>42 reviews</p>
          </div>
          <p>$100.00</p>
          <div>
            <p>Color</p>
          </div>
          <div>
            <p>
              Size - <span>EU Men</span>
            </p>
            <p>40.5</p>
            <p>Size guide</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn flex w-full items-center justify-center space-x-4 rounded-md bg-black text-white">
              <FiShoppingBag />
              <p>Add to cart</p>
            </button>
            <button className="rounded-md bg-orange-100 p-2.5">
              <FiHeart className="text-xl text-gray-800" />
            </button>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-900">
            <CiDeliveryTruck className="text-xl" />
            <p>Free delivery on orders over $50.00</p>
          </div>
        </div>
      </section>
      {/* reviews and discussion */}
      <section className="flex">
        <div className="basis-2/3">
          <ReviewCard />
        </div>
        <div className="basis-1/3"></div>
      </section>
    </section>
  );
}
