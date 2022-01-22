import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const routesResult = useRoutes(routes);
  return routesResult;
}

export default App;
