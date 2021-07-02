import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "../pages/SettingsPage";
import ROUTES from "../constants/Routes";
import Home from "../pages";
import Listing from "../pages/ListingPage";
import Clients from "../pages/ClientsPage";
import Files from "../pages/FilesPage";

const Routes = () => {
  const { HOME, FILES, LISTING, CLIENTS, SETTINGS } = ROUTES;
  return (
    <Router>
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={FILES} exact component={Files} />
        <Route path={LISTING} exact component={Listing} />
        <Route path={CLIENTS} exact component={Clients} />
        <Route path={SETTINGS} exact component={Settings} />
      </Switch>
    </Router>
  );
};

export default Routes;
