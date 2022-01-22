import { useRoutes } from "react-router-dom";
import BaseLayout from "./components/templates/BaseLayout";
import routes from "./routes";

function App() {
  const routesResult = useRoutes(routes);
  return <BaseLayout>{routesResult}</BaseLayout>;
}

export default App;
