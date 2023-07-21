import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "wouter";
import Layout from "~/components/ui/Layout";
import { Heading, Paragraph } from "~/components/ui/atoms";
import { Card } from "~/components/ui/molecules/Card";
import { useTitle } from "~/hooks/useTitle";
import { VITE_PASSWORD, VITE_USERNAME } from "~/lib/utils/constants";
import { resultsListAtom } from "~/store";
import { ChildrenProps } from "~/types";

export default function SavedResults() {
  const [resultsList, setResultsList] = useAtom(resultsListAtom);

  useEffect(() => {
    if (localStorage.getItem("results")) {
      setResultsList(JSON.parse(localStorage.getItem("results") as string));
    }
  }, [setResultsList]);

  useTitle("Saved Results");

  return (
    <SavedResultsRoute>
      <Layout>
        <div className="flex justify-center items-center flex-col">
          <Heading className="mb-4 text-center" intent="light">
            Saved Results
          </Heading>
          <div className="grid grid-cols-3 gap-4 grid-rows-1 w-full">
            {resultsList !== null ? (
              resultsList.map((item) => <Card item={item} key={item.id} />)
            ) : (
              <Paragraph intent="light">Belum ada!</Paragraph>
            )}
          </div>
        </div>
        <ToastContainer />
      </Layout>
    </SavedResultsRoute>
  );
}

function SavedResultsRoute({ children }: ChildrenProps) {
  return (
    <>
      {Cookies.get("password") === VITE_PASSWORD ||
      Cookies.get("username") === VITE_USERNAME ? (
        children
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
