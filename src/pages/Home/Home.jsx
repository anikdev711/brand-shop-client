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
        </div>
    );
};

export default Home;