
const ProductDetailsCard = ({ productDetails }) => {
    const { product_image, product_name, product_details } = productDetails;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={product_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{product_details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success font-bold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;