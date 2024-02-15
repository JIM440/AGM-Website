import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// +++++++++++ pages +++++++++++
import Home from './pages/home';

import About from './pages/about';
import Agm from './pages/about/Agm';
import ProphetKevin from './pages/about/ProphetKevin';

import Counselling from './pages/contact/Counselling';
import Invitations from './pages/contact/Invitations';
import Others from './pages/contact/Others';
import Partner from './pages/contact/Partner';
import PrayerRequests from './pages/contact/PrayerRequests';
import Questions from './pages/contact/Questions';
import ReceiveSalvation from './pages/contact/ReceiveSalvation';
import Testimony from './pages/contact/Testimony';

import Project from './pages/partner/Project';
import Partners from './pages/partner/Partner';
import Donate from './pages/partner/Donate';

import Ministry from './pages/ministry/Ministry';
import Salvation from './pages/ministry/Salvation';
import Testimonies from './pages/ministry/Testimony';
import Articles from './pages/ministry/articles/Articles';
import Article from './pages/ministry/articles/Article';

import NotFound from './pages/notfound/NotFound';

// +++++++++++ layout +++++++++++

import RootLayout from './common/Layout/RootLayout';
import ContactLayout from './pages/contact/ContactLayout';
import PartnerLayout from './pages/partner';

// +++++++++++ Routes +++++++++++

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Home */}
      <Route index element={<Home />} />

      {/* About */}
      <Route path="about" element={<About />}>
        <Route index element={<ProphetKevin />} />
        <Route path="agm" element={<Agm />} />
      </Route>

      {/* ministry */}
      <Route path="ministry">
        <Route index element={<Ministry />} />
        <Route path="salvation" element={<Salvation />} />
        <Route path="testimonies" element={<Testimonies />} />
        <Route path="articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>

      {/* partner */}
      <Route path="partner" element={<PartnerLayout />}>
        <Route index element={<Partners />} />
        <Route path="projects" element={<Project />} />
        <Route path="donate" element={<Donate />} />
      </Route>

      {/* contact */}
      <Route path="contact" element={<ContactLayout />}>
        <Route path="prayerrequests" element={<PrayerRequests />} />
        <Route path="testimonies" element={<Testimony />} />
        <Route path="questions" element={<Questions />} />
        <Route path="invitations" element={<Invitations />} />
        <Route path="others" element={<Others />} />
        <Route path="partner" element={<Partner />} />
        <Route path="salvation" element={<ReceiveSalvation />} />
        <Route path="counselling" element={<Counselling />} />
      </Route>

      {/* not found */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// used to scroll to top whenever a page is changed

function App() {
  return <RouterProvider router={router} />;
}

export default App;
