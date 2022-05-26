import React, { useState } from 'react'
import Feature from './Feature/Feature';
import classes from "./Product.module.css"
import ProductItem from './ProductItem';
import SaleProduct from './SaleProducts/SaleProduct';

function Product() {
    const [showAll,setShowAll]=useState(true);
    const [onSale,setOnSale]=useState(false);
    const [featured,setFeatured]=useState(false);
    const [addProduct,setAddProduct]=useState(false);
    const [scan,setScan]=useState(false);

    const allhandler=()=>{
        setShowAll(true)
        setOnSale(false);
        setFeatured(false);
        setAddProduct(false);
        setScan(false);
    }
    const salehandler=()=>{
        setShowAll(false)
        setOnSale(true);
        setFeatured(false);
        setAddProduct(false);
        setScan(false);
    }
    const featurehandler=()=>{
        setShowAll(false)
        setOnSale(false);
        setFeatured(true);
        setAddProduct(false);
        setScan(false);
    }
    const producthandler=()=>{
        setShowAll(false)
        setOnSale(false);
        setFeatured(false);
        setAddProduct(true);
        setScan(false);
    }
    const scanhandler=()=>{
        setShowAll(false)
        setOnSale(false);
        setFeatured(false);
        setAddProduct(false);
        setScan(true);
    }
  return (
    <div className={classes.box}>
        <div className={classes.btns}>
            <button className={`${classes.btn} ${showAll?classes.active:""}`}  onClick={allhandler} >All</button>
            <button className={`${classes.btn} ${onSale?classes.active:""}`} onClick={salehandler} >On Sale</button>
            <button className={`${classes.btn} ${featured?classes.active:""}`} onClick={featurehandler} >Featured</button>
            <button className={`${classes.btn} ${addProduct?classes.active:""}`} onClick={producthandler} >+ Add Product</button>
            <button className={`${classes.btn} ${scan?classes.active:""}`} onClick={scanhandler} >Scan Product</button>
        </div>
        {showAll&&<ProductItem></ProductItem>}
        {onSale&&<SaleProduct></SaleProduct>}
        {featured&&<Feature></Feature>}
    </div>
  )
}

export default Product