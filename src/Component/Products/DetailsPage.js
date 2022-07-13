import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "../Styles/DetailsPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const { image, title, category, price, rating, description } = items;

  const handaleIncrement = () => {
    setCount(count + 1);
  };
  const handaleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      toast.warning("You Have Added At Least One Products");
    }
  };

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
          <div className=" my-3 d-flex justify-content-between">
            <span className=" text-success">Rate: {rating?.rate}</span>
            <span className=" text-danger ">Count: {rating?.count}</span>
          </div>
          <h2 className=" text-success my-3">$ {price}</h2>
          <p className={Styles.itemsDes}>{description}</p>
          <h5>
            Category: <span className={Styles.itemsCategory}>{category}</span>
          </h5>
          <div className="cart_area mt-5 d-flex align-items-center justify-content-between">
            <div className="count_num d-flex align-items-center">
              <FontAwesomeIcon
                onClick={handaleIncrement}
                size="xl"
                icon={faPlusCircle}
              />
              <h3 className=" mx-4">{count}</h3>
              <FontAwesomeIcon
                onClick={handaleDecrement}
                size="xl"
                icon={faMinusCircle}
              />
            </div>
            <div className={Styles.cartBtn}>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
