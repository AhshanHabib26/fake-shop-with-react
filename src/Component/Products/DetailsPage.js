import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from '../Styles/DetailsPage.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const DetailsPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { image, title, category, price, rating, description } = items;

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items, setItems, id]);

  return (
    <div className=" container my-5">
      <div className={Styles.itemsContainer}>
        <div className="img_area">
          <img className={Styles.itemsImage} src={image} alt="" />
        </div>
        <div className="text_details">
          <h1 className={Styles.itemsHeading}>{title}</h1>
          <div className=" d-flex justify-content-between">
            <span className=" text-success">
              Rate: {rating?.rate}
            </span>
            <span className=" text-danger ">
              Count: {rating?.count}
            </span>
          </div>
          <h1 className=" text-success my-3">$ {price}</h1>
          <p className={Styles.itemsDes}>{description}</p>
          <h5>Category: <span className={Styles.itemsCategory}>{category}</span></h5>
          <div className="cart_area mt-5 d-flex align-items-center justify-content-between">
            <div className="count_num d-flex align-items-center">
            <FontAwesomeIcon size="xl" icon={faPlusCircle} />
            <h2 className=" mx-4">0</h2>
            <FontAwesomeIcon size="xl" icon={faMinusCircle} />
            </div>
            <div className="cart_btn">
                <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
