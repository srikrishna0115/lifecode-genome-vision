
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/contexts/CartContext"
import Index from "./pages/Index"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Partners from "./pages/Partners"
import LifecodeOne from "./pages/LifecodeOne"
import LifecodeEssentials from "./pages/LifecodeEssentials"
import LifecodeEnhanced from "./pages/LifecodeEnhanced"
import StandardHealthMen from "./pages/StandardHealthMen"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/lifecode-one" element={<LifecodeOne />} />
            <Route path="/lifecode-essentials" element={<LifecodeEssentials />} />
            <Route path="/lifecode-enhanced" element={<LifecodeEnhanced />} />
            <Route path="/standard-health-men" element={<StandardHealthMen />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
)

export default App
