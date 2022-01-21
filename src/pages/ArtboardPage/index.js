import { useParams } from "react-router-dom";

function ArtboardPage() {
  const { artboardId } = useParams();
  return (
    <div>
      <p>Artboard Page</p>
    </div>
  );
}

export default ArtboardPage;
