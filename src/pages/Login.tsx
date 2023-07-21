import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "wouter";
import Layout from "~/components/ui/Layout";
import { LoginForm } from "~/components/ui/organisms";
import { useTitle } from "~/hooks/useTitle";
import { VITE_PASSWORD, VITE_USERNAME } from "~/lib/utils/constants";
import { ChildrenProps } from "~/types";

export default function Login() {
  useTitle("Login");

  return (
    <LoginRoute>
      <Layout>
        <LoginForm />
        <ToastContainer />
      </Layout>
    </LoginRoute>
  );
}

function LoginRoute({ children }: ChildrenProps) {
  return (
    <>
      {Cookies.get("password") === VITE_PASSWORD &&
      Cookies.get("username") === VITE_USERNAME ? (
        <Redirect to="/" />
      ) : (
        children
      )}
    </>
  );
}
