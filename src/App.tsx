import { Route, Switch } from "wouter";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SavedResults from "./pages/SavedResults";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/saved-results">
        <SavedResults />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
