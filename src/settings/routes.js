import Main from '../contents/renders/Main'
import Home from '../contents/layouts/Home'
import ErrorDocument from '../contents/renders/ErrorDocument'

export const NotFound = ErrorDocument(404)

export const routes = [
  {
    render: Main,
    routes: [
      {
        path: "/",
        exact: true,
        layout: Home
      }
    ]
  }
]
