import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const product_image = form.imgURL.value;
        const product_name = form.name.value;
        const product_brand = form.brand.value;
        const product_type = form.type.value;
        const product_price = form.price.value;
        const product_rating = form.rating.value;
        const product_details = form.description.value;

        const newBrandProduct = {
            product_image,
            product_name,
            product_brand,
            product_type,
            product_price,
            product_rating,
            product_details
        }
        console.log(newBrandProduct);

        fetch('https://brand-shop-server-1x6ohhjmz-anikdev100-gmailcom.vercel.app/allproducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBrandProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
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
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="imgURL"
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
                                    placeholder="Product rating"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;