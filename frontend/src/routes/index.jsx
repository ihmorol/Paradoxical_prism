import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CreateReport from "../pages/CreateReport";
import Gallery from "../pages/Gallery";
import Decode from "../pages/Decode";
import ReviewerLogin from "../pages/ReviewerLogin";
import ReviewerConsoleList from "../pages/ReviewerConsoleList";
import ReviewerConsoleDetail from "../pages/ReviewerConsoleDetail";
import ReportConfirmation from "../pages/ReportConfirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "report/new", element: <CreateReport /> },
      { path: "report/confirmation", element: <ReportConfirmation /> },
      { path: "gallery", element: <Gallery /> },
      { path: "decode", element: <Decode /> },
      { path: "reviewer/login", element: <ReviewerLogin /> },
      { path: "reviewer/console", element: <ReviewerConsoleList /> },
      { path: "reviewer/console/:id", element: <ReviewerConsoleDetail /> },
    ],
  },
]);
