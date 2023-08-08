import Cookies from "js-cookie";
import { Redirect } from "wouter";
import Layout from "~/components/ui/Layout";
import { RegisterForm } from "~/components/ui/organisms";
import { useTitle } from "~/hooks";
import {
  VITE_PASSWORD,
  VITE_USERNAME,
  decryptedPassword,
  decryptedUsername,
} from "~/lib/utils/constants";
import { ChildrenProps } from "~/types";

export default function Register() {
  useTitle("Register");

  return (
    <RegisterRoute>
      <Layout>
        <RegisterForm />
      </Layout>
    </RegisterRoute>
  );
}

function RegisterRoute({ children }: ChildrenProps) {
  return (
    <>
      {(Cookies.get("password") !== undefined &&
        Cookies.get("username") !== undefined) ||
      (decryptedPassword === VITE_PASSWORD &&
        decryptedUsername === VITE_USERNAME) ? (
        <Redirect to="/" />
      ) : (
        children
      )}
    </>
  );
}
