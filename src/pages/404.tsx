import Layout from "~/components/ui/Layout";
import { Heading, Paragraph } from "~/components/ui/atoms";
import { useTitle } from "~/hooks/useTitle";

export default function NotFoundPage() {
  useTitle("� 404 Not Found");

  return (
    <Layout>
      <div className="text-center">
        <Heading intent="light">😴 404 Not Found</Heading>
        <Paragraph intent="light" size="large" weight="medium" className="mt-4">
          Looks like the page that you want to visit is not found.
        </Paragraph>
      </div>
    </Layout>
  );
}
