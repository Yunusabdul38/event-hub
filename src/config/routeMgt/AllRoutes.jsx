import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./RoutePaths";
import SearchResults from "../../components/pages/SearchResults";
import EventsDesc from "../../components/pages/EventsDesc";
import TicketBooking from "../../components/pages/TicketBooking";
import AttendeeDets from "../../components/pages/AttendeeDets";
import OrderSummary from "../../components/pages/OrderSummary";
import Share from "../../components/pages/Share";
import ComingSoon from "../../components/ComingSoon";
// import ContactUs from '../../features/contactUs/pages/ContactUs';
import DashboardLayout from "../../layout/Layout";
import LogIn from "../../authentication/pages/LogIn";
import SignUp from "../../authentication/pages/SignUp";
import Home from "../../features/home/Home";
import CreateEvent from "../../features/createEvent/CreateEvent";
import MainProfile from "../../features/profile";
import CreateEventContextProvider from "../../stateManagement/CreateEventContex";

const routesArray = [
  {
    path: appRoutes.home,
    element: <Home />,
  },
  {
    path: appRoutes.contactUs,
    element: <ComingSoon />,
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
  {
    path: appRoutes.login,
    element: <LogIn />,
  },
  {
    path: appRoutes.sign_up,
    element: <SignUp />,
  },
  {
    path: appRoutes.coming_soon,
    element: <ComingSoon />,
  },
  {
    path: appRoutes.create_Event,
    element: (
      <CreateEventContextProvider>
        <CreateEvent />
      </CreateEventContextProvider>
    ),
  },
  {
    path: appRoutes.profile,
    element: <MainProfile />,
  },
  {
    path: appRoutes.helpCenter,
    element: <ComingSoon />,
  },
  {
    path: appRoutes.aboutUs,
    element: <ComingSoon />,
  },
  {
    path: appRoutes.contactUs,
    element: <ComingSoon />,
  },
  {
    path: appRoutes.find_Event,
    element: "",
  }
];

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          {routesArray.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
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
