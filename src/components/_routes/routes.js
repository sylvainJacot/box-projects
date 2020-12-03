import { Route, Switch } from "react-router-dom";

import { paths } from "../_routes/routes-paths";

import HomePage from "../04-pages/HomePage";
import ScrollVideo from "../04-pages/projects/ScrollVideo";
import ButtonComponent from "../04-pages/projects/ButtonComponent";
import ScrollAnimations from "../04-pages/projects/ScrollAnimations"
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
  {
    path: paths.ButtonComponent,
    exact: true,
    component: ButtonComponent,
  },
  {
    path: paths.ScrollAnimations,
    exact: true,
    component: ScrollAnimations,
  }
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
