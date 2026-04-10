import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  const { products = [], loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Fresh Groceries</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          !loading && <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Home;