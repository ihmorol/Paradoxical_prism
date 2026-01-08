import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import CreateReport from "@/pages/CreateReport";
import Gallery from "@/pages/Gallery";
import Decode from "@/pages/Decode";
import ReviewerConsole from "@/pages/ReviewerConsole";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home now handles its own layout via LayoutShell
  },
  {
    path: "/report/new",
    element: <CreateReport />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/decode",
    element: <Decode />,
  },
  {
    path: "/reviewer/*",
    element: <ReviewerConsole />,
  },
]);
