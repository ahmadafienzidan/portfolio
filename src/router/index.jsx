import { createBrowserRouter } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

export default router;
