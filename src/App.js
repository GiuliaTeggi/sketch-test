import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import DocumentLayout from "./components/templates/DocumentLayout";
import ArtboardPage from "./pages/ArtboardPage";
import DocumentPage from "./pages/DocumentPage";
import NotFoundPage from "./pages/NotFoundPage";
import { client } from "./graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DocumentLayout />}>
            <Route path="document/:documentId" element={<DocumentPage />}>
              <Route path="artboard/:artboardId" element={<ArtboardPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
