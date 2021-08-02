import {BrowserRouter, Switch, Route} from 'react-router-dom'

import routes from './routes'

import DocumentFound from './renders/DocumentFound'
import ErrorDocument from './renders/ErrorDocument'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
        <Route
        key={`route${index}`}
        path={route.path}
        exact={route.exact || true}>
          <DocumentFound Layout={route.layout} title={route.title}/>
        </Route>
        ))}
        <Route>
          <ErrorDocument code={404}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
