import { Toaster } from "react-hot-toast";
import { Router } from "./router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


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
      <Router />
      <Toaster toastOptions={{duration: 3000}} />
    </QueryClientProvider>
  )
}

export default App
