import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import Loading from "./components/ui/Loading";
import NotFoundPage from "./pages/404";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </Route>
      <Route path="/login">
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      </Route>
      <Route path="/register">
        <Suspense fallback={<Loading />}>
          <Register />
        </Suspense>
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
