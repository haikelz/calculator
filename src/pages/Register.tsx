import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "wouter";
import Layout from "~/components/ui/Layout";
import { RegisterForm } from "~/components/ui/organisms";
import { useTitle } from "~/hooks/useTitle";
import { ChildrenProps } from "~/types";

export default function Register() {
  useTitle("Register");

  return (
    <RegisterRoute>
      <Layout>
        <RegisterForm />
        <ToastContainer />
      </Layout>
    </RegisterRoute>
  );
}

function RegisterRoute({ children }: ChildrenProps) {
  return (
    <>
      {Cookies.get("username") !== undefined &&
      Cookies.get("password") !== undefined ? (
        <Redirect to="/" />
      ) : (
        children
      )}
    </>
  );
}
