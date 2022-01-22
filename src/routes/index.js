import ArtboardPage from "../pages/ArtboardPage";
import DocumentPage from "../pages/DocumentPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <DocumentPage />,
    path: "document/:documentId",
  },
  {
    element: <ArtboardPage />,
    path: "document/:documentId/artboard/:artboardId",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
];

export default routes;
