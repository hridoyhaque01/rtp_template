import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;
  const authChecked = true;
  return !authChecked ? (
    <div>loading....</div>
  ) : (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
