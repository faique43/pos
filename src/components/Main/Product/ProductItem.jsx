import React from "react";
import classes from "./ProductItem.module.css";
import smoothie from "../../../assets/smoothie.jpg";
import burger from "../../../assets/burger.jpg";
import pizza from "../../../assets/pizza.jpg";
import fries from "../../../assets/fries.jpg";
import Item from "./Item";

const ProductItem = () => {
  return (
    <div className={classes.box}>
      <Item src={smoothie} title="Smoothie" price="250" cat={true}></Item>
      <Item src={burger} title="Burger" price="450" cat={true}></Item>
      <Item src={pizza} title="Pizza" price="999" cat={true}></Item>
      <Item src={fries} title="Fries" price="100" cat={true}></Item>
      {/* <Item src={fries} title="Fries" price="100" cat={true}></Item>
      <Item src={fries} title="Fries" price="100" cat={true}></Item> */}
    </div>
  );
};

export default ProductItem;
