import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./assets/css/globals.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import store from "./store";
import "./i18n";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <Redirect to="/auth/login" />
      </Route>
      <Route path="/auth/login" component={Login} />
    </Router>
  </Provider>
);
