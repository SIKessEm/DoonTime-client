import Home from './layouts/Home'
import GetStarted from './layouts/GetStarted'
import LearnMore from './layouts/LearnMore'
import LogIn from './layouts/LogIn'
import SignUp from './layouts/SignUp'

const routes = [
  {
    path: "/",
    title: process.env.REACT_APP_WEBSITE_SHORTNAME,
    layout: Home
  },
  {
    path: "/learning-more",
    title: `${process.env.REACT_APP_WEBSITE_SHORTNAME}: Learn more`,
    layout: LearnMore
  },
  {
    path: "/getting-started",
    title: `${process.env.REACT_APP_WEBSITE_SHORTNAME}: Get started`,
    layout: GetStarted
  },
  {
    path: "/connection",
    title: `${process.env.REACT_APP_WEBSITE_SHORTNAME}: Connect`,
    layout: LogIn
  },
  {
    path: "/registration",
    title: `${process.env.REACT_APP_WEBSITE_SHORTNAME}: Register`,
    layout: SignUp
  }
]

export default routes
