import { Toaster } from "react-hot-toast";
import { Router } from "./router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LaunchProvider } from "./app/contexts";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LaunchProvider>
        <Router />
        <Toaster toastOptions={{duration: 3000}} />
      </LaunchProvider>
    </QueryClientProvider>
  )
}

export default App
