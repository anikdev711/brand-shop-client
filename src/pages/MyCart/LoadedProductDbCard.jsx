import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";




const LoadedProductDbCard = ({ loadedProductDb, loadedProductsDb, setLoadedProductsDb }) => {
    const { _id, product_brand, product_details, product_image, product_name, product_price, product_rating, product_type } = loadedProductDb;

    const handleDeleteProduct = (_id) => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-1x6ohhjmz-anikdev100-gmailcom.vercel.app/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const othersProducts = loadedProductsDb.filter(item => item._id !== _id);
                            setLoadedProductsDb(othersProducts);
                        }

                    })

            }
        })
    }



    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product_image} alt="" className="w-72 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title mt-4 mb-4">{product_name.slice(0, 20)}</h2>

                    <div className="flex w-full">
                        <p className="flex justify-start">Brand: {product_brand}</p>
                        <p className="flex justify-end">Type: {product_type}</p>
                    </div>

                    <div className="flex w-full">
                        <p className="flex items-center justify-start">Price: ${product_price}</p>
                        <p className="flex items-center justify-end">
                            <ReactStars
                                count={product_rating}
                                // onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </p>
                    </div>
                    <p>{product_details.slice(0, 100)}</p>

                    <div className="card-actions mt-5">
                        <button
                            onClick={() => handleDeleteProduct(_id)}
                            className="btn btn-outline btn-warning font-bold text-black">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoadedProductDbCard;