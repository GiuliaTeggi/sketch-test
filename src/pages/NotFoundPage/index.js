import Heading from "../../components/atoms/Heading";
import PageLayout from "../../components/templates/PageLayout";

function NotFoundPage() {
  return <PageLayout content={<Heading>Page not found :(</Heading>} />;
}

export default NotFoundPage;
