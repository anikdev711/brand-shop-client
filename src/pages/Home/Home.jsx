import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "./BrandCard";

const Home = () => {
    const brands = useLoaderData();
    console.log(brands);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20 bg-[#EFF3FA]">
                <h4 className="text-center text-[#EF1D26] font-bold text-xl pt-8">__Top Brands</h4>
                <h1 className="text-center font-extrabold mt-5 text-4xl">Browse Top Quality Brands</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-5 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>

            </div>

            {/* why choose us section starts  */}
            <div className="mt-20">
                <div className="hero min-h-screen bg-[#EFF3FA]">
                    <div className="hero-content text-center">
                        <div className="w-full flex flex-col md:flex-col lg:flex-row gap-5">
                            <div className="w-1/2 text-left">
                                <h3 className="text-[#EF1D26] font-semibold text-xl">__Why Choose Us</h3>
                                <h1 className="text-2xl font-extrabold mt-5 mb-5">Provide Best Service For Everyone</h1>
                                <img src="https://i.imgur.com/NfSYrAZ.png" alt="" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4">
                                {/* card #1 */}
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-4xl font-extrabold">01</h2>
                                        <p className="text-3xl font-bold">Best Quality Brands</p>
                                        <p>You can find wide range of brands here.</p>
                                    </div>
                                </div>
                                {/* card #2  */}
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-4xl font-extrabold">02</h2>
                                        <p className="text-3xl font-bold">Reasonable Price</p>
                                        <p>You can find your dream products with reasonable price.</p>
                                    </div>
                                </div>
                                {/* card #3  */}
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-4xl font-extrabold">03</h2>
                                        <p className="text-3xl font-bold">Service & Maintenance</p>
                                        <p>Our certified mechanics will help you</p>
                                    </div>
                                </div>
                                {/* card #4  */}
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title text-4xl font-extrabold">04</h2>
                                        <p className="text-3xl font-bold">Easy Finance</p>
                                        <p>We have easy finance system</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us section ends */}
            {/* download app section starts */}
            <div className="mt-20 max-w-6xl mx-auto">
                <div className="card lg:card-side bg-[#EFF3FA] shadow-xl">
                    <figure><img src="https://i.imgur.com/QCvqLeb.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#EF1D26] font-bold text-xl">__Our App</h2>
                        <p className="text-4xl font-extrabold">Download Our App For Free!</p>
                        <p>Our app is free. If you use this app, it will update you about our latest products and upcoming latest brands. It has made our finance system easy and cool. So, why late? Download it now.</p>
                        <div className="card-actions justify-end">
                            <a href="https://play.google.com/store/apps?hl=en&gl=US&pli=1">
                                <button className="btn btn-warning">Google</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* download app section ends */}

        </div>
    );
};

export default Home;