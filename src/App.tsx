import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

export default function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}
