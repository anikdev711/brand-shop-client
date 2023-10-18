import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { id, brand_image, brand_name } = brand;
    return (
        <div>
            <Link to={`/branddetails/${id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={brand_image} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;