const TrendingProducts = () => {
  return (
    <div>
      <h1 className="text-3xl font-mono text-blue-500 text-center font-bold underline mb-4">
        Trending Products
      </h1>
      <div
        className="grid grid-cols-2
       lg:grid-cols-12 grid-rows-3 lg:min-h-[900px]
        min-h-[600px] "
      >
        {/* image-1 */}
        <div
          className="lg:col-span-3 lg:row-span-2 col-span-1 
           group relative hover:bg-[#326870b3]  bg-blend-overlay
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(https://i.ibb.co/Qdmb10r/electric-guitar-isolated-white-background-min.jpg)`,
          }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Base Guitar
            </h2>
          </div>
        </div>

        {/* image-2 */}
        <div
          className="lg:col-span-6 lg:row-span-1 col-span-1  group bg-center
           relative hover:bg-[#823a4db3]  bg-blend-overlay bg-cover
            bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(https://i.ibb.co/qxKKmRs/4397.jpg)` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Guitar
            </h2>
          </div>
        </div>

        {/* image-3 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1 bg-center
           group relative hover:bg-[#8d9d3eb3]  bg-blend-overlay
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(https://i.ibb.co/DD8JDMg/OIUGBN0.jpg)`,
          }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Guitar
            </h2>
          </div>
        </div>

        {/* image-4 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1  bg-center
           group relative hover:bg-[#bea454b3]  bg-blend-overlay
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(https://i.ibb.co/qxKKmRs/4397.jpg)` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Base guitar
            </h2>
          </div>
        </div>

        {/* image-5 */}
        <div
          className="lg:col-span-6 lg:row-span-1 col-span-1 bg-center
           group relative hover:bg-[#3b8983b3]  bg-blend-overlay
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(https://i.ibb.co/DD8JDMg/OIUGBN0.jpg)`,
          }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Electric Guitar
            </h2>
          </div>
        </div>

        {/* image-6 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1  group bg-center
           relative hover:bg-[#adbe52b3]  bg-blend-overlay bg-cover
            bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(https://i.ibb.co/DD8JDMg/OIUGBN0.jpg)`,
          }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Guitar
            </h2>
          </div>
        </div>

        {/* image-7 */}
        <div
          className="lg:col-span-6 lg:row-span-1 col-span-1  bg-center
          group relative hover:bg-[#b24b67b3]  bg-blend-overlay
          bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(https://i.ibb.co/DD8JDMg/OIUGBN0.jpg)`,
          }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Normal Guitar
            </h2>
          </div>
        </div>

        {/* image-8 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1  bg-center 
          group relative hover:bg-[#e9e253b3]  bg-blend-overlay
          bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(https://i.ibb.co/qxKKmRs/4397.jpg)` }}
        >
          <div className="absolute bottom-4  left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              Guitar
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
