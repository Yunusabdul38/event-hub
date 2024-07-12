import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { appRoutes } from './RoutePaths';

// import { RequireAuth } from 'react-auth-kit';

import Home from '../../features/home/Home';
import ContactUs from '../../features/contactUs/pages/ContactUs'
import DashboardLayout from '../../layout/Layout';
import MainProfile from '../../features/profile';

const routesArray = [
  {
    path: appRoutes.home,
    element: <Home />,
  },
  {
    path: appRoutes.contact_us,
    element: <ContactUs />
  },
  {
    path: appRoutes.profile,
    element: <MainProfile/>
  }
];

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          {routesArray.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              // element={
              //   route.path === appRoute.login ? (
              //     route.element
              //   ) : (
              //     <RequireAuth loginPath={appRoute.login}>
              //       {route.element}
              //     </RequireAuth>
              //   )
              // }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
