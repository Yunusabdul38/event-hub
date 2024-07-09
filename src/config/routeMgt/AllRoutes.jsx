import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./RoutePaths";

// import { RequireAuth } from 'react-auth-kit';

import Home from "../../features/home/Home";
import ContactUs from "../../features/contactUs/pages/ContactUs";
import DashboardLayout from "../../layout/Layout";
import CreateEvent from "../../features/createEvent/CreateEvent";
import CreateEventBanner from "../../features/createEvent/CreateEventBanner";
import TicketType from "../../features/createEvent/TicketType"
import Review from "../../features/createEvent/Preview";
import CreateEventForm from "../../features/createEvent/CreateEventForm";

const routesArray = [
  {
    path: appRoutes.home,
    element: <Home />,
  },
  {
    path: appRoutes.contact_us,
    element: <ContactUs />,
  },
  {
    path: appRoutes.create_Event,
    element: <CreateEvent />,
    children: [
    { path: appRoutes.create_Event, element: <CreateEventForm /> },
      { path: appRoutes.create_Banner, element: <CreateEventBanner /> },
      { path: appRoutes.create_TicketType, element: <TicketType /> },
      { path: appRoutes.review, element: <Review /> },
    ],
  },
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
            >
              {route.children?.map((routes, number) => (
                <Route
                  path={routes.path}
                  key={number}
                  element={routes.element}
                />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
