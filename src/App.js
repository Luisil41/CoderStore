import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <AppRouter />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
