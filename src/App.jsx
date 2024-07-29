import { RouterProvider } from "react-router-dom";
import "./App.css";
import SmoothScroll from "./components/smothScroll/SmothScroll";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;
  const authChecked = true;
  return !authChecked ? (
    <div>loading....</div>
  ) : (
    <div>
      {/* <SmoothScroll> */}
        <RouterProvider router={Router}></RouterProvider>
      {/* </SmoothScroll> */}
    </div>
  );
}

export default App;
