import { AiFillControl } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";
const WhyChooseUS = () => {
  return (
    <div className="bg-white">
      <section className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b ">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className=" my-3 text-3xl font-mono flex items-center justify-center text-blue-500 font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <marquee>
            <h2 className="block w-full text-black bg-clip-text font-bold  text-3xl sm:text-4xl">
              Build a <span className="text-pink-600">Website</span> That Your{" "}
              <span className="text-blue-500">Customers</span> Love
            </h2>
          </marquee>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-black">
            Our templates allow for maximum customization. No technical skills
            required – our intuitive design tools let you get the job done
            easily.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 text-black"
        >
          <div className="rounded-md border border-neutral-800  p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center bg-pink-300 justify-center rounded-md border ">
              <AiFillControl />
            </div>
            <h3 className="mt-6 0">Customizable</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              Tailor your landing page look and feel, from the color scheme to
              the font size, to the design of the page.
            </p>
          </div>

          <div className="rounded-md border border-neutral-800  p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center bg-yellow-300 rounded-md border ">
              <AiFillThunderbolt />
            </div>
            <h3 className="mt-6 ">Fast Performance</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              We build our templates for speed in mind, for super-fast load
              times so your customers never waver.
            </p>
          </div>

          <div className="rounded-md border border-neutral-800  p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center bg-blue-300 rounded-md border ">
              <AiFillTool />
            </div>
            <h3 className="mt-6 ">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              Everything you need to succeed and launch your landing page, right
              out of the box. No need to install anything else.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
      </section>
    </div>
  );
};

export default WhyChooseUS;
