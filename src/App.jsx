import { lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./config/routeMgt/RoutePaths";
import OrderSummary from "./components/pages/OrderSummary";
import DashboardLayout from "./layout/Layout";
import CreateEventContextProvider from "./stateManagement/CreateEventContex";
import { Loader } from "./components/Loading";
import { eventLoader } from "./services/get-event-by-id";
import { getAlleventLoader } from "./services/getEventByLimit";
import { homeGetEventLoader } from "./services/home-page-loader.";

// Lazy-load
const Home = lazy(() => import("./pages/home/Home"));
const SearchResults = lazy(() => import("./components/pages/SearchResults"));
const EventsDesc = lazy(() => import("./components/pages/EventsDesc"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const CreateEvent = lazy(() => import("./pages/createEvent/CreateEvent"));
const LogIn = lazy(() => import("./pages/authentication/LogIn"));
const SignUp = lazy(() => import("./pages/authentication/SignUp"));
const MainProfile = lazy(() => import("./pages/profile/index"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/aboutUs/aboutUs"));

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
        loader:homeGetEventLoader,
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
        path: appRoutes.orderSummary,
        element: <OrderSummary />,
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
