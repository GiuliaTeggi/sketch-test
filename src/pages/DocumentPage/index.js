import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTBOARDS } from "../../graphql/queries";
import Header from "../../components/molecules/Header";
import Heading from "../../components/atoms/Heading";
import ArtboardsList from "../../components/molecules/ArtboardsList";
import ContentFallback from "../../components/molecules/ContentFallback";

function DocumentPage() {
  const { documentId } = useParams();
  const { loading, error, data } = useQuery(GET_ARTBOARDS, {
    variables: { documentId },
  });

  if (loading || error) {
    return (
      <ContentFallback
        loading={loading}
        error={error}
        errorMessage={"Ooops there was an error loading the document :("}
      />
    );
  }

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
    </>
  );
}

export default DocumentPage;
