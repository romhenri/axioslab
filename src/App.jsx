import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import NavBar from './components/struct/NavBar.jsx';

export const PageWithHeader = ({children}) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense"/>
        </PageWithHeader>
      }
    >
        <div className="h-full bg-indigo-50 pt-4">
          <NavBar/>
          <div className="p-4 lg:p-24">
            <Router/>
          </div>
        </div>
    </Suspense>
  </BrowserRouter>
);
