import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Layout } from "./Layout.jsx";

// Pages
import { Home } from "../views/Home.jsx";
import RequestCancelToken from "../views/RequestCancelToken.jsx";
import HookCancelToken from "../views/HookCancelToken.jsx";
import { NotFound } from "../views/NotFound.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.Default}
      element={
        <Layout>
          <div className="w-full flex justify-center items-center">
            <h1>Axios Lab</h1>
          </div>
        </Layout>
      }
    />
    <Route
      path={RoutePaths.Home}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.useCancelToken}
      element={
        <Layout>
          <HookCancelToken />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.fetchCancelToken}
      element={
        <Layout>
          <RequestCancelToken />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
