import Layout from "./Layout";
import { Heading } from "./atoms";

export default function Loading() {
  return (
    <Layout>
      <Heading intent="light" size="normal">
        Loading....
      </Heading>
    </Layout>
  );
}
