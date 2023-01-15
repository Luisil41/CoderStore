import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome to Route 125. Please select one category"/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtered Products"/>} />
          * <Route path="/item/:productId" element={<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
