/* eslint-disable react/no-unknown-property */

import ProductCards from "./ProductCards";


// import ProductCards from "./ProductCards";

const BrandDetailsCard = ({ brandDetails }) => {
    const { products, ad_first, ad_second, ad_third } = brandDetails;
    // console.log(products);



    return (
        <div>
            <h3 className="text-[#EF1D26] font-bold text-xl text-center mt-10 mb-5">__Best Choice</h3>
            <h1 className="text-center font-extrabold mb-5 text-3xl">Find Your Favourite Car</h1>
            <div className="max-w-6xl mx-auto">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={ad_first} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={ad_second} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={ad_third} className="w-full" />
                    </div>
                    
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>

            <h3 className="text-[#EF1D26] text-center font-bold text-xl mt-10 mb-5">__Find Products</h3>
            <h1 className="text-center font-extrabold text-3xl mb-5">Find Your Necessary Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto mt-20 mb-20 p-5">
                {
                    products?.map(product => <ProductCards key={product.id} product={product}></ProductCards>)
                }
            </div>
        </div>
    );
};

export default BrandDetailsCard;