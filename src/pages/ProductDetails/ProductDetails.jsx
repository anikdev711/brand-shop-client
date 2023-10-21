/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetails = () => {
    const loadedProduct = useLoaderData();
    const [productDetails, setProductDetails] = useState({});
    const {id} = useParams();
    
    useEffect(()=>{
        const findProducts = loadedProduct.find(item=>item._id === id);
        // console.log(findProducts);
        setProductDetails(findProducts);

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