import { Suspense } from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./config/routeMgt/RoutePaths";
import SearchResults from "./components/pages/SearchResults";
import EventsDesc from "./components/pages/EventsDesc";
import TicketBooking from "./components/pages/TicketBooking";
import AttendeeDets from "./components/pages/AttendeeDets";
import OrderSummary from "./components/pages/OrderSummary";
import Share from "./components/pages/Share";
import ComingSoon from "./components/ComingSoon";
import DashboardLayout from "./layout/Layout";
import LogIn from "./authentication/pages/LogIn";
import SignUp from "./authentication/pages/SignUp";
import Home from "./features/home/Home";
import CreateEvent from "./features/createEvent/CreateEvent";
import MainProfile from "./features/profile";
import CreateEventContextProvider from "./stateManagement/CreateEventContex";
import ContactUs from "./features/contactUs/ContactUs";
import AboutUs from "./features/aboutUs/aboutUs";
import { Loader } from "./components/Loading";
import { eventLoader } from "./services/get-event-by-id";
import { getAlleventLoader } from "./services/getEventByLimit";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});


const route = createBrowserRouter([
  {
    path:"/",
    element: <DashboardLayout/>,
    children:[
      {
        path: appRoutes.home,
        element: <Home />,
      },
      {
        path: appRoutes.contactUs,
        element: <ContactUs  />,
      },
      {
        path: appRoutes.search,
        element: <SearchResults />,
        loader:getAlleventLoader,
      },
      {
        path: appRoutes.eventsDescription,
        element:<EventsDesc/>,
        loader: eventLoader,
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
        element: <AboutUs />,
      },
      {
        path: appRoutes.contactUs,
        element: <ComingSoon />,
      },
      {
        path: appRoutes.find_Event,
        element: "",
      }
    ],
  }  
])
function App() {
  return (
    // <AuthProvider authType="localstorage" authName="event-hub">
    <QueryClientProvider client={queryClient}>
     <Suspense fallback={<Loader />}>
        <RouterProvider router={route}/>
      </Suspense>
    </QueryClientProvider>
    // </AuthProvider>
  );
}

export default App;
