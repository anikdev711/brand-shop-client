/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";

const BrandDetails = () => {
    const [brandDetails, setBrandDetails] = useState({});
    const { id } = useParams();
    const intId = parseInt(id);
    const loadedBrand = useLoaderData();
    useEffect(() => {

        const findBrandDetails = loadedBrand.find(item => item.id === intId);
        setBrandDetails(findBrandDetails);

        // console.log(findBrandDetails);
    }, [intId, loadedBrand])
    return (
        <div>
            <BrandDetailsCard brandDetails={brandDetails}></BrandDetailsCard>
        </div>
    );
};

export default BrandDetails;