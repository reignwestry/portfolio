import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home';
import AboutPage from './pages/about'
import GalleryPage from './pages/gallery'
import ContactPage from './pages/contact'
import ResumePage from './pages/resume'

//Projects
// import SOCsconce from './projects/09-SOC-Scones/index.html';

import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import './scss/App.scss';
// const root = ReactDOM.createRoot(document.getElementById('root'))

// const SOCsconceRedirect = () => {
//   window.location.href="./projects/09-SOC-Scones/index.html"
// }

const AcmeRedirectSite = () => {
  window.location.href = "/projects/01-ACME-Photography/index.html"
}
const AppThemeRedirectSite = () => {
  window.location.href = "/projects/02-AppTheme/index.html"
}
const FudiRedirectSite = () => {
  window.location.href = '/projects/03-FUDI/index.html'
}
const MassageParlorRedirectSite = () => {
  window.location.href='/projects/04-Massage-Parlor/index.html'
}
const DayCareRedirect = () => {
  window.location.href='/projects/05-DayCare/index.html'
}
const GirlScoutsRedirect = () => {
  window.location.href='/projects/06-GirlScoutForm/index.html'
}
const TipCalcRedirect = () => {
  window.location.href='/projects/07-Js_TipCalculator/index.html'
}
const SconesRedirect = () => {
  window.location.href='/projects/08-SOC-Scones/index.html'
}
const OmnifoodRedirect = () => {
  window.location.href='/projects/09-OMNIFOOD-service/index.html'
}

const DiceGameRedirect = () => {
  window.location.href='/projects/11-DiceGame/index.html'
}
const ResponsiveEmailRedirect = () => {
  window.location.href='/projects/12-ResponsiveEmail/index.html'
}
const QuizzerRedirect = () => {
  window.location.href='/projects/13-Quizzer/index.php'
}
const ShoutItRedirect = () => {
  window.location.href='/projects/13-Quizzer/index.php'
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/projects/acme",
    element: <AcmeRedirectSite />,
  },
  {
    path: "/projects/apptheme",
    element: <AppThemeRedirectSite />,
  },
  {
    path: "/projects/fudi",
    element: <FudiRedirectSite />,
  },
  {
    path: "/projects/massageparlor",
    element: <MassageParlorRedirectSite />,
  },
  {
    path: "/projects/daycare",
    element: <DayCareRedirect />,
  },
  {
    path: "/projects/girlscouts",
    element: <GirlScoutsRedirect />,
  },
  {
    path: "/projects/tipcalc",
    element: <TipCalcRedirect />,
  },
  {
    path: "/projects/scones",
    element: <SconesRedirect />,
  },
  {
    path: "/projects/omnifood",
    element: <OmnifoodRedirect />,
  },
  {
    path: "/projects/dicegame",
    element: <DiceGameRedirect />,
  },
  {
    path: "/projects/vineyardemail",
    element: <ResponsiveEmailRedirect />,
  },
  {
    path: "/projects/quizzer",
    element: <QuizzerRedirect />,
  },
  {
    path: "/projects/shoutit",
    element: <ShoutItRedirect />,
  },
  {
    path: "/projects/fudi",
    element: <FudiRedirectSite />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
