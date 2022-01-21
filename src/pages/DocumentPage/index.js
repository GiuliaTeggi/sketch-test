import { useParams, Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTBOARDS } from "../../graphql/queries";
import Header from "../../components/molecules/Header";
import Heading from "../../components/atoms/Heading";
import ArtboardsList from "../../components/molecules/ArtboardsList";

function DocumentPage() {
  const { documentId } = useParams();
  const { loading, error, data } = useQuery(GET_ARTBOARDS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const {
    share: {
      version: {
        document: {
          name,
          artboards: { entries },
        },
      },
    },
  } = data;

  const filteredArtboards = entries.filter((entry) => entry.isArtboard);
  return (
    <>
      <Header>
        <Heading>{name}</Heading>
      </Header>
      <ArtboardsList artboards={filteredArtboards} />
      <Outlet />
    </>
  );
}

export default DocumentPage;
