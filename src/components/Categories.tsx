interface Category {
  name: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "Women",
    link: "/women",
  },
  {
    name: "Men",
    link: "/men",
  },
  {
    name: "Kids",
    link: "/",
  },
  {
    name: "Sports",
    link: "/sports",
  },
  {
    name: "Brands",
    link: "/brands",
  },
  {
    name: "Sale",
    link: "/sale",
  },
];

export default function Categories() {
  const pathname = "/";
  return (
    <div className="flex flex-col space-y-4 px-8 py-4">
      <div className="flex items-center space-x-4">
        {categories.map((category) => (
          <a
            href={category.link}
            className={`text-sm font-medium ${category.link === pathname ? "text-orange-700" : "text-gray-600"}`}
          >
            {category.name}
          </a>
        ))}
      </div>
      <hr className="border-gray-200" />
    </div>
  );
}
