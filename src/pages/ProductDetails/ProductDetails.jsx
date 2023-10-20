/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetails = () => {
    const loadedProduct = useLoaderData();
    // const {_id} = loadedProduct;
    const [productDetails, setProductDetails] = useState({});
    const {id} = useParams();
    console.log(id);
    // const idInt = parseInt(_id);
    // console.log(idInt);
    console.log(loadedProduct);
    // console.log(loadedProduct);
    // const loadedProductsOfArr = [];
    // loadedProduct.forEach(obj=>{
    //     const {products} = obj;
    //     products.forEach(product=>{
    //         loadedProductsOfArr.push(product)
    //     })
        // const selectedProducts = obj.products;
        // console.log(selectedProducts);
        // const selectedProductsObj 
    // })
    // console.log(loadedProductsOfArr);

    useEffect(()=>{
        const findProducts = loadedProduct.find(item=>item._id === id);
        // console.log(findProducts);
        setProductDetails(findProducts);
        // setProductDetails(findProducts)

    },[])
    // console.log(productDetails);
    // console.log(productDetails);

    return (
        <div className="p-5 mt-8">
            <ProductDetailsCard productDetails={productDetails}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;