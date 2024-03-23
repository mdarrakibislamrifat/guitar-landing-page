import Lottie from "lottie-react";
import animationPicture from "../../assets/Animation - 1711127843069.json";

const Banner = () => {
  return (
    <div
      data-aos="fade-left"
      className="flex px-6 md:px-4  items-center justify-center  md:h-[600px] overflow-hidden"
    >
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-3xl lg:text-5xl text-center md:text-left font-serif  leading-tight font-medium">
            <span className="text-pink-500 ">Jbanez</span> New Series Paul
            Timmons Signature
          </h2>
          <h3 className="mt-6 md:mt-6 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Explore our wide selection of guitars, amplifiers, pedals, and
            accessories. Whether you are a seasoned musician or just starting
            out, we have everything you need to unleash your musical creativity.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
              Get started
            </button>
            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
              Watch a Demo
            </button>
          </div>
        </div>
        <div className="w-full  md:w-1/2  flex justify-center md:justify-end">
          <Lottie animationData={animationPicture}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
