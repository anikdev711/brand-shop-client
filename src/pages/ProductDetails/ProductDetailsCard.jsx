import Swal from "sweetalert2";

const ProductDetailsCard = ({ productDetails }) => {
    const { product_image, product_name, product_brand, product_type, product_price, product_rating, product_details } = productDetails;

    const handleAddToCartProduct = e => {
        e.preventDefault();
        const addToCartProduct = {
            product_name,
            product_image,
            product_brand,
            product_type,
            product_price,
            product_rating,
            product_details
        }
        console.log(addToCartProduct);

        fetch('https://brand-shop-server-q262561p7-anikdev100-gmailcom.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your product has been saved to database',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })



    }



    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={product_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>Product Brand: {product_brand}</p>
                    <p>Product Price: ${product_price}</p>
                    <p>{product_details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCartProduct} className="btn btn-outline btn-success font-bold">Add to Cart</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDetailsCard;