import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ItemListContainer greeting="Welcome to Route 125. Please select one category" />
        }
      />
      <Route
        path="/category/:categoryId"
        element={<ItemListContainer greeting="Filtered Products" />}
      />
      <Route path="/item/:productId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRouter;
