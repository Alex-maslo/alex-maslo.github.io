import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "recipes", element: <RecipesPage /> },
    ],
  },
]);
