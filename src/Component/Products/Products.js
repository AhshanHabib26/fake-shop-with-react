import useProducts from "../Hooks/useProducts";
import Product from "./Product";
import Styles from "../Styles/Products.module.css";
import { Row } from "react-bootstrap";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="container">
      <h1 className={Styles.ProductsHeading}>Our Awesome Product</h1>

      <Row xs={1} md={2} lg={3} className="g-3">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Row>
    </div>
  );
};

export default Products;
