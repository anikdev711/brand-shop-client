// import { useEffect, useState } from "react";
// import Rating from "react-rating";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
    const { _id, product_image, product_name, product_brand, product_type, product_price, product_rating } = product;
    // console.log(product);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={product_image} alt="" className="w-72 h-40" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product_name}
                    </h2>
                    <div className="flex">
                        <p>Brand:{product_brand}</p>
                        <p className="text-right">Type: {product_type}</p>
                    </div>
                    <div className="flex">
                        <p className="w-1/2 flex items-center text-left">Price: ${product_price}</p>
                        {/* <p>{product_rating}</p> */}
                        <p className="w-1/2 flex items-center justify-end">
                            <ReactStars
                                count={product_rating}
                                // onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />,
                        </p>
                    </div>
                    <div className="card-actions justify-end">
                        {/* <div className="badge badge-outline">Fashion</div> */}
                        {/* <div className="badge badge-outline">Products</div> */}
                        <Link to={`/productdetails/${_id}`}>
                            <button className="btn-secondary text-white font-bold p-2 rounded-lg">Details</button>
                        </Link>
                        <Link to={`/updateproduct/${_id}`}>
                            <button className="btn-accent text-white font-bold rounded-lg p-2">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;