import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export default function ReviewCard() {
  return (
    <section className="flex space-x-4">
      <div>
        <FaRegCircleUser className="text-3xl" />
      </div>
      <div className="flex flex-col space-y-1 text-sm">
        <div className="flex items-center space-x-2 font-medium">
          <p>Helen M.</p>
          <p className="text-gray-500">Yesterday</p>
        </div>
        <p>rating</p>
        <p>Excellent running shoes. They are comfortable and fit well.</p>
        <div className="flex items-center space-x-4">
          <p className="text-orange-300">Reply</p>
          <p className="flex items-center space-x-1">
            <AiOutlineLike />
            <span>4</span>
          </p>
          <p className="flex items-center space-x-1">
            <AiOutlineDislike />
            <span>4</span>
          </p>
        </div>
      </div>
    </section>
  );
}
