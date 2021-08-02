import {BrowserRouter, Switch, Route} from 'react-router-dom'


export default function Router({Render, routes}) {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
        <Route
        key={`route${index}`}
        path={route.path}
        exact={route.exact || true}>
          <Render Layout={route.layout} title={route.title}/>
        </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
