import React from 'react';
import Card from 'react-bootstrap/Card';
import Styles from '../Styles/Product.module.css'
import { Link } from 'react-router-dom'

const Product = ({product}) => {

    const { image, title, category, price, id} = product

    return (
        <div>
            <Card>
            <Card.Img variant="top" className=' w-50  p-5 mx-auto ' src={image} />
            <Card.Body className=' text-center'>
              <h6 className={Styles.prdCategory}>{category}</h6>
              <Card.Title>{title}</Card.Title>
              <h2 className={Styles.prdPrice}>$ {price}</h2>
              <div className=' d-flex justify-content-around'>
              <Link to={`/products/${id}`} className={Styles.exploreBtn} >Explore More</Link>
              <button className={Styles.buyBtn} >Buy Now</button>
              </div>
            </Card.Body>
          </Card>
        </div>
    );
};

export default Product;