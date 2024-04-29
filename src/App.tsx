import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/sign-up", element: <Signup /> },
]);

export default function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}
