import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  // [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
