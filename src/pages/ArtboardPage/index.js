import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTBOARDS } from "../../graphql/queries";
import Header from "../../components/molecules/Header";
import Heading from "../../components/atoms/Heading";
import ContentFallback from "../../components/molecules/ContentFallback";

function ArtboardPage() {
  const { documentId, artboardId } = useParams();
  const { loading, error, data } = useQuery(GET_ARTBOARDS, {
    variables: { documentId },
  });

  if (loading || error) {
    return (
      <ContentFallback
        error={error}
        loading={loading}
        errorMessage={"Oops there was an error loading the artboard :("}
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

  return (
    <>
      <Header>
        <Heading>{name}</Heading>
      </Header>
      <p>Artboard Page</p>
    </>
  );
}

export default ArtboardPage;
