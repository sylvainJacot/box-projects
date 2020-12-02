import { Route, Switch } from "react-router-dom";

import {paths} from "../_routes/routes-paths";

import HomePage from "../04-pages/HomePage";
import ScrollVideo from "../04-pages/projects/ScrollVideo";
import ErrorPage from "../04-pages/ErrorPage";


const Routes = [
  // {
  //   path: paths.home,
  //   exact: true,
  //   component: HomePage,
  // },
  {
    path: paths.ScrollVideo,
    exact: true,
    component: ScrollVideo,
  },

];

const AppRoutes = () => {
  return (
    <>
      <Switch>
        {Routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default AppRoutes;
