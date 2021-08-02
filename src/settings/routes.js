import DocumentFound from '../contents/renders/DocumentFound'
import Home from '../contents/layouts/Home'
import GetStarted from '../contents/layouts/GetStarted'
import LearnMore from '../contents/layouts/LearnMore'
import ErrorDocument from '../contents/renders/ErrorDocument'

export const NotFound = ErrorDocument(404)

export const routes = [
  {
    render: DocumentFound,
    routes: [
      {
        path: "/",
        title: "DoonTime",
        layout: Home
      },
      {
        path: "/learning-more",
        title: "DoonTime: Learn more",
        layout: LearnMore
      },
      {
        path: "/getting-started",
        title: "DoonTime: Get started",
        layout: GetStarted
      }
    ]
  }
]
