import useProducts from "../Hooks/useProducts";
import Product from "./Product";
import Styles from "../Styles/Products.module.css";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="container">
      <h1 className={Styles.ProductsHeading}>Our Awesome Product</h1>
      <div className={Styles.ProductsContainer}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
