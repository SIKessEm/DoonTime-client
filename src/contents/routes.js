import Home from './layouts/Home'
import GetStarted from './layouts/GetStarted'
import LearnMore from './layouts/LearnMore'

const routes = [
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

export default routes
