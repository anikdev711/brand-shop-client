
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/o6xIDZ0.png)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h3 className="mb-5 text-white text-xl font-bold">Welcome To Auto<span className="text-[#EF1D26]">Motorz</span> Wizdom</h3>
                        <h1 className="text-white text-4xl font-bold mt-5 mb-5">
                            Best Way To Find
                            <br />
                            Your <span className="uppercase text-[#EF1D26] font-extrabold">Dream</span> Car With Us!
                        </h1>
                        <p className="text-white text-base">
                            AutoMotorz Wizdom is your one-stop shop for six well-known vehicle companies and their latest offerings. Discover elegance, power, and style all in one spot, making your car journey unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;