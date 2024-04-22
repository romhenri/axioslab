import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { Request } from "../home/Request.jsx";
import HookCancelToken
from "../home/HookCancelToken.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.Default}
      element={
        <Layout>
          <Request/>
        </Layout>
      }
    />
    <Route
      path={RoutePaths.useCancelToken}
      element={
        <Layout>
          <HookCancelToken/>
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
