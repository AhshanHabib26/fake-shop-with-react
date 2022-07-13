import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDollar, faTruckFast, faHeadset } from "@fortawesome/free-solid-svg-icons";
import Styles from "../Styles/Support.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Support = () => {
  return (
    <div className=" container my-3">
      <Row xs={1} md={3} className="g-4 RowArea">
        <Col>
          <div className=" BorderArea d-flex align-items-center">
            <div className={Styles.imgArea}>
              <FontAwesomeIcon size="xl" icon={faDollar} />
            </div>
            <div className={Styles.textArea}>
              <h1>Money Back Guarante</h1>
              <p>100% money back guarante</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className=" d-flex align-items-center">
            <div className={Styles.imgArea}>
              <FontAwesomeIcon size="xl" icon={faTruckFast} />
            </div>
            <div className={Styles.textArea}>
              <h1>Free Shipping & Return</h1>
              <p>Free Shipping on All Orders Over $110</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className=" d-flex align-items-center">
            <div className={Styles.imgArea}>
              <FontAwesomeIcon size="xl" icon={faHeadset} />
            </div>
            <div className={Styles.textArea}>
              <h1>Online Support 24/8</h1>
              <p>Join Our Support Center</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Support;
