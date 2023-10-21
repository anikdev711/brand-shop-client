import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const productUpdateData = useLoaderData();
    const { _id, product_brand, product_details, product_image, product_name, product_price, product_rating, product_type } = productUpdateData;
    // console.log((id));

    const handleProductUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const product_image = form.imgURL.value;
        const product_name = form.name.value;
        const product_brand = form.brand.value;
        const product_type = form.type.value;
        const product_price = form.price.value;
        const product_details = form.description.value;
        const product_rating = form.rating.value;

        const updateProduct = {
            product_image,
            product_name,
            product_brand,
            product_type,
            product_price,
            product_details,
            product_rating
        }

        console.log(updateProduct);

        fetch(`https://brand-shop-server-q262561p7-anikdev100-gmailcom.vercel.app/allproducts/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your product has been updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleProductUpdate}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="imgURL"
                                    defaultValue={product_image}
                                    placeholder="Product Image URL"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={product_name}
                                    placeholder="Product name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    defaultValue={product_brand}
                                    placeholder="Product brand name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input
                                    type="text"
                                    name="type"
                                    defaultValue={product_type}
                                    placeholder="Product type"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    defaultValue={product_price}
                                    placeholder="Product price"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={product_details}
                                    placeholder="Product description"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    defaultValue={product_rating}
                                    placeholder="Product rating"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;