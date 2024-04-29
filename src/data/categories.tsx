import { FiShoppingBag } from "react-icons/fi";
import {
  MdIron,
  MdOutlinePhoneAndroid,
  MdSportsBasketball,
} from "react-icons/md";
import { GiAmpleDress } from "react-icons/gi";

interface Category {
  name: string;
  link: string;
  icon: JSX.Element;
}
export const categories: Category[] = [
  {
    name: "Supermarket",
    link: "/supermarket",
    icon: <FiShoppingBag />,
  },
  {
    name: "Phones",
    link: "/phones",
    icon: <MdOutlinePhoneAndroid />,
  },
  {
    name: "Sports Equipment",

    link: "/sports-equipment",
    icon: <MdSportsBasketball />,
  },
  {
    name: "Fashion",

    link: "/fashion",
    icon: <GiAmpleDress />,
  },
  {
    name: "Appliances",
    link: "/appliances",
    icon: <MdIron />,
  },
];
