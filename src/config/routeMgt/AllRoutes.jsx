import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./RoutePaths";

// import { RequireAuth } from 'react-auth-kit';

import Home from "../../features/home/Home";
import ContactUs from "../../features/contactUs/pages/ContactUs";
import DashboardLayout from "../../layout/Layout";
import SearchResults from "../../components/pages/SearchResults";
import EventsDesc from "../../components/pages/EventsDesc";
import TicketBooking from "../../components/pages/TicketBooking";
import AttendeeDets from "../../components/pages/AttendeeDets";
import OrderSummary from "../../components/pages/OrderSummary";
import Share from "../../components/pages/Share";

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
    path: appRoutes.search,
    element: <SearchResults />,
  },
  {
    path: appRoutes.eventsDescription,
    element: <EventsDesc />,
  },
  {
    path: appRoutes.ticketBooking,
    element: <TicketBooking />,
  },
  {
    path: appRoutes.attendeeDets,
    element: <AttendeeDets />,
  },
  {
    path: appRoutes.orderSummary,
    element: <OrderSummary />,
  },
  {
    path: appRoutes.share,
    element: <Share />,
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
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
