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

import NotFound from './pages/notfound/NotFound';
import Fetch from './Fetch';
import Salvation from './pages/salvation';
import Testimonies from './pages/testimony';
import Articles from './pages/articles/Articles';
import Article from './pages/articles/Article';

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

import Ministry from './pages/ministry';

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
      <Route path="ministry" element={<Ministry />} />

      {/* partner */}
      <Route path="partner" element={<PartnerLayout />}>
        <Route index element={<Partners />} />
        <Route path="project" element={<Project />} />
        <Route path="donate" element={<Donate />} />
      </Route>

      {/* contact */}
      <Route path="contact" element={<ContactLayout />}>
        <Route path="prayerrequests" element={<PrayerRequests />} />
        <Route path="testimonies" element={<Testimony />} />
        <Route path="questions" element={<Questions />} />
        <Route path="invitation" element={<Invitations />} />
        <Route path="others" element={<Others />} />
        <Route path="partner" element={<Partner />} />
        <Route path="salvation" element={<ReceiveSalvation />} />
        <Route path="counselling" element={<Counselling />} />
      </Route>

      {/* articles */}
      <Route path="articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>

      {/* testimonies */}
      <Route path="testimonies" element={<Testimonies />} />

      {/* salvation */}
      <Route path="salvation" element={<Salvation />} />
      {/* salvation */}
      <Route path="fetch" element={<Fetch />} />

      {/* not found */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
