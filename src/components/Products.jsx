import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthProduct } from "../actions/productActions";
import  ProductCard  from "./ProductCard"

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => dispatch(fecthProduct());
    getProducts();
  }, []);

  const { products } = useSelector((state) => state);

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 gap-4">
        {products.loading ? (
          <h3 className="border border-blue-500 py-2 text-center mt-2">Loading</h3>
        ) : (
          products?.products.map((product) => {
            return (
             <ProductCard key={product?.id} product={product}/>
            );
          })
        )}
       {products.error ? <div className="border border-red-500 py-2 text-center mt-2">Error: Fetching Error</div> : null}
      </div>
    </div>
  );
};

export default Products;
