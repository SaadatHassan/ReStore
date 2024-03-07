import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { Home } from "@mui/icons-material";
import Catalog from "../../features/catalog/Catalog";
import ProdcutDetailsPage from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProdcutDetailsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
