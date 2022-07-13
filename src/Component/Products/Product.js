import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = ({product}) => {

    const { image, title, category, price, rating, description, id} = product

    return (
        <div>
            <Card>
            <Card.Img variant="top" className=' w-50  p-5 mx-auto ' src={image} />
            <Card.Body className=' text-center'>
              <h6 className=''>{category}</h6>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
    );
};

export default Product;