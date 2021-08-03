import Home from './layouts/Home'
import GetStarted from './layouts/GetStarted'
import LearnMore from './layouts/LearnMore'
import LogIn from './layouts/LogIn'
import SignUp from './layouts/SignUp'

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
  },
  {
    path: "/LogIn",
    title: "DoonTime: Log in",
    layout: LogIn
  },
  {
    path: "/SignUp",
    title: "DoonTime: Sign up",
    layout: SignUp
  }
]

export default routes
