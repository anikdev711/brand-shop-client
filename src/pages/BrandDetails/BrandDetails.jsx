/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
// import brands from '/brands.json'

const BrandDetails = () => {
    // const [brandDetails, setBrandDetails] = useState({});
    const [productsData, setProductsData] = useState([]);
    const { id } = useParams();
    const intId = parseInt(id);
    // console.log(brand_name);
    const loadedBrand = useLoaderData();
    // console.log(loadedBrand);
    // const brandProduct = useLoaderData()
    // const brandData = brands;
    // console.log(brandData);
    useEffect(() => {
        const findBrandDetails = loadedBrand.find(item => item.id === intId);
        // setBrandDetails(findBrandDetails);
        console.log(findBrandDetails);
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const findProducts = data.filter(item => item.product_brand === findBrandDetails.brand_name)
                // console.log(findProducts);


                setProductsData(findProducts)


            })
            
            

    }, [intId, loadedBrand])

    console.log(productsData);


    // useEffect(()=>{
    //     fetch('http://localhost:5000/allproducts')
    //     .then(res=>res.json())
    //     .then(data=>{
    // console.log(data);
    // setProductsData(data)
    // const matchedProductData = loadedBrand.map(item1=>{
    //     const matchedProductItem = data.find(item2=>item2.product_brand === item1.brand_name)
    // console.log(matchedProductItem);
    // const matchedProductsData = data.find(item=>item.product_brand === brandDetails.brand_name)
    // console.log(matchedProductsData);

    //         })
    //     });
    // },[])


    return (
        <div>
            {/* <BrandDetailsCard brandDetails={brandDetails}></BrandDetailsCard> */}
            <BrandDetailsCard productsData={productsData}></BrandDetailsCard>
        </div>
    );
};

export default BrandDetails;