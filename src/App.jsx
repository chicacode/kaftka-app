import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container mx-auto px-16">
          <h1 className="text-center text-4xl font-bold py-16 text-blue-950">
            Kaftka shopping cart
          </h1>
          <Routes>
            <Route exact path="/" Component={Products} />
            <Route exact path="/products/new" Component={NewProduct} />
            <Route exact path="/cart" Component={Cart} />
            <Route
              exact
              path="/products/update/:id"
              Component={UpdateProduct}
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

// fake store api
