/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id);
    // console.log(idInt);
    const loadedProduct = useLoaderData();
    // console.log(loadedProduct);
    const loadedProductsOfArr = [];
    loadedProduct.forEach(obj=>{
        const {products} = obj;
        products.forEach(product=>{
            loadedProductsOfArr.push(product)
        })
        // const selectedProducts = obj.products;
        // console.log(selectedProducts);
        // const selectedProductsObj 
    })
    // console.log(loadedProductsOfArr);

    useEffect(()=>{
        const findProducts = loadedProductsOfArr.find(item=>item.product_id === idInt);
        // console.log(findProducts);
        setProductDetails(findProducts);
        // setProductDetails(findProducts)

    },[idInt, loadedProductsOfArr])
    // console.log(productDetails);
    // console.log(productDetails);

    return (
        <div className="p-5 mt-8">
            <ProductDetailsCard productDetails={productDetails}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;