import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTBOARDS } from "../../graphql/queries";
import Heading from "../../components/atoms/Heading";
import ContentFallback from "../../components/molecules/ContentFallback";
import PageLayout from "../../components/templates/PageLayout";
import ArtboardDetail from "../../components/molecules/ArtboardDetail";

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
          artboards: { entries },
        },
      },
    },
  } = data;

  const currentArtboard = entries[artboardId];
  return (
    <PageLayout
      header={<Heading>{currentArtboard.name || "[Artboard Name]"}</Heading>}
      content={<ArtboardDetail artboard={currentArtboard} />}
    />
  );
}

export default ArtboardPage;
