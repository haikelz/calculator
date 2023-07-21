import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Redirect } from "wouter";
import Layout from "~/components/ui/Layout";
import { Combined } from "~/components/ui/organisms";
import {
  VITE_PASSWORD,
  VITE_USERNAME,
  decryptedPassword,
  decryptedUsername,
} from "~/lib/utils/constants";
import { resultsListAtom } from "~/store";
import { ChildrenProps } from "~/types";

export default function Home() {
  const setResultsList = useSetAtom(resultsListAtom);

  useEffect(() => {
    if (localStorage.getItem("results")) {
      setResultsList(JSON.parse(localStorage.getItem("results") as string));
    }
  }, [setResultsList]);

  return (
    <HomeRoute>
      <Layout>
        <Combined />
      </Layout>
    </HomeRoute>
  );
}

function HomeRoute({ children }: ChildrenProps) {
  return (
    <>
      {(Cookies.get("password") !== undefined &&
        Cookies.get("username") !== undefined) ||
      (decryptedUsername === VITE_USERNAME &&
        decryptedPassword === VITE_PASSWORD) ? (
        children
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
