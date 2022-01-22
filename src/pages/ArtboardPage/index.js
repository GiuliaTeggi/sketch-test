import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTBOARDS } from "../../graphql/queries";
import ContentFallback from "../../components/molecules/ContentFallback";
import PageLayout from "../../components/templates/PageLayout";
import ArtboardDetail from "../../components/molecules/ArtboardDetail";
import ArtboardHeader from "../../components/organisms/ArtboardHeader";

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
  const totalArtboards = entries.length;
  const currentIndex = Number(artboardId);
  return (
    <PageLayout
      header={
        <ArtboardHeader
          documentId={documentId}
          totalArtboards={totalArtboards}
          currentIndex={currentIndex}
          name={currentArtboard.name}
        />
      }
      content={<ArtboardDetail artboard={currentArtboard} />}
    />
  );
}

export default ArtboardPage;
