import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LoadedProductDbCard from "./LoadedProductDbCard";

const MyCart = () => {
    const loadedProductsFromDB = useLoaderData();
    console.log(loadedProductsFromDB);
    const [loadedProductsDb, setLoadedProductsDb] = useState(loadedProductsFromDB);
    return (
        <div>
            <h1 className="text-center text-4xl text-[#EF1D26] font-extrabold mt-10 mb-10">My cart: {loadedProductsDb.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 max-w-6xl mx-auto">
                {
                    loadedProductsDb?.map(loadedProductDb => <LoadedProductDbCard key={loadedProductDb._id} 
                        loadedProductDb={loadedProductDb}
                        loadedProductsDb={loadedProductsDb}
                        setLoadedProductsDb={setLoadedProductsDb}></LoadedProductDbCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;