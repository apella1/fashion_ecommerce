import { CiDeliveryTruck } from "react-icons/ci";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import shoes from "../assets/shoes.jpg";
import ReviewCard from "./ReviewCard";

export default function ProductDetailsCard() {
  return (
    <section className="section-x-padding flex flex-col space-y-8 py-16">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <p>Clothes and shoes</p>
        <div className="rounded-full  bg-gray-400 p-[3px]"></div>
        <p>Shoes</p>
        <div className="rounded-full  bg-gray-400 p-[3px]"></div>
        <p>Rebook</p>
      </div>
      <section className="flex space-x-8">
        {/* images */}
        <div className="flex basis-1/2 flex-col space-y-4">
          <div>
            <img
              src={shoes}
              alt="shoes"
              className="h-[600px] w-full rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={shoes}
              alt="shoes"
              className="h-[200px] w-[200px] rounded-md"
            />
            <img
              src={shoes}
              alt="shoes"
              className="h-[200px] w-[200px] rounded-md"
            />
            <img
              src={shoes}
              alt="shoes"
              className="h-[200px] w-[200px] rounded-md"
            />
            <img
              src={shoes}
              alt="shoes"
              className="h-[200px] w-[200px] rounded-md"
            />
          </div>
        </div>
        {/* details */}
        <div className="flex basis-1/2 flex-col space-y-8">
          <p className="text-xl font-medium text-black">
            Shoes Reebok Zig Kinetica 3
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <p>stars</p>
            <p className="text-gray-600">42 reviews</p>
          </div>
          <p className="text-3xl font-medium text-black">$100.00</p>
          <section>
            <div className="flex items-center space-x-2 text-sm">
              <p>Color</p>
              <div className="rounded-full bg-gray-400 p-1"></div>
              <p className="text-gray-400">White</p>
            </div>
          </section>
          {/* size info */}
          <div className="">
            <div className="flex items-center space-x-2 text-sm">
              <p>Size</p>
              <div className="rounded-full bg-gray-400 p-1"></div>
              <p className="text-gray-400">EU Men</p>
            </div>
            <p className="py-2 text-sm text-gray-600 underline">Size guide</p>
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
      <section className="flex flex-col space-y-4">
        <div className="flex space-x-4 pb-4 text-xl">
          <p className="font-medium text-black">Reviews</p>
          <p className="font-medium text-gray-600">Discussions</p>
        </div>
        <section className="flex">
          <div className="basis-2/3">
            <ReviewCard />
          </div>
          <div className="basis-1/3"></div>
        </section>
      </section>
    </section>
  );
}
