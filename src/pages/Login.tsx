import Cookies from "js-cookie";
import { Redirect } from "wouter";
import Layout from "~/components/ui/Layout";
import { LoginForm } from "~/components/ui/organisms";
import { useTitle } from "~/hooks";
import {
  VITE_PASSWORD,
  VITE_USERNAME,
  decryptedPassword,
  decryptedUsername,
} from "~/lib/utils/constants";
import { ChildrenProps } from "~/types";

export default function Login() {
  useTitle("Login");

  return (
    <LoginRoute>
      <Layout>
        <LoginForm />
      </Layout>
    </LoginRoute>
  );
}

function LoginRoute({ children }: ChildrenProps) {
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
