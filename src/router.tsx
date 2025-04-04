import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import AddTask from "./pages/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
    ],
  },
]);
export default router;
