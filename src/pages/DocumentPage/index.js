import { useParams, Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTBOARDS } from "../../graphql/queries";

function DocumentPage() {
  const { documentId } = useParams();
  const { loading, error, data } = useQuery(GET_ARTBOARDS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const {
    share: {
      version: {
        document: {
          artboards: { entries },
        },
      },
    },
  } = data;

  const artboardsList = entries.filter((entry) => entry.isArtboard);
  return (
    <div>
      <p>Document Page</p>
      <ul>
        {artboardsList.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default DocumentPage;
