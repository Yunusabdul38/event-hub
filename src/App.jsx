// import { AuthProvider } from 'react-auth-kit';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import AllRoutes from './config/routeMgt/AllRoutes';
import img from "./assets/images/AIimage.png"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    // <AuthProvider authType="localstorage" authName="event-hub">
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
    </QueryClientProvider>
    // </AuthProvider>
  );
}

export default App;
