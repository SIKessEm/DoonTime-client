import Main from '../contents/renders/Main'
import Home from '../contents/layouts/Home'
import GetStarted from '../contents/layouts/GetStarted'
import LearnMore from '../contents/layouts/LearnMore'
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
      },
      {
        path: "/learning-more",
        exact: true,
        layout: LearnMore
      },
      {
        path: "/getting-started",
        exact: true,
        layout: GetStarted
      }
    ]
  }
]
