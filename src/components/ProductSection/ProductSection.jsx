const ProductSection = () => {
  return (
    <div>
      <h1 className="text-3xl underline font-bold text-center">
        Featured Products
      </h1>
      <section
        data-aos="fade-right"
        className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0"
      >
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img
              src="https://i.ibb.co/ZS0XpHN/headstock-classical-fingerboard-wood-fretboard-1.jpg"
              alt=""
            />
            <div className="space-x-1 flex justify-center mt-10">
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl my-5">Wood Color Guitar</h1>
            <p className="mb-5">
              Classic acoustic elegance with solid Sitka spruce top and East
              Indian rosewood back and sides.
            </p>
            <h2 className="font-semibold mb-5">$29.99</h2>
            <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
              Add To Cart
            </button>
          </section>

          <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img src="https://i.ibb.co/DD8JDMg/OIUGBN0.jpg" alt="" />
            <div className="space-x-1 flex justify-center mt-10">
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl my-5">Electric Vibe Guitar</h1>
            <p className="mb-5">
              Iconic electric guitar known for its sleek design, versatile
              pickups, and smooth maple neck.
            </p>
            <h2 className="font-semibold mb-5">$39.99</h2>
            <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
              Add To Cart
            </button>
          </section>

          <section className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img src="https://i.ibb.co/qxKKmRs/4397.jpg" alt="" />
            <div className="space-x-1 flex justify-center mt-10">
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl my-5">Taylor 214ce Grand Auditorium</h1>
            <p className="mb-5">
              Versatile acoustic-electric guitar with solid Sitka spruce top and
              layered rosewood back and sides.
            </p>
            <h2 className="font-semibold mb-5">$19.99</h2>
            <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
              Add To Cart
            </button>
          </section>

          <section className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img
              src="https://i.ibb.co/Qdmb10r/electric-guitar-isolated-white-background-min.jpg"
              alt=""
            />
            <div className="space-x-1 flex justify-center mt-9">
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
              <svg
                className="w-4 h-4 mx-px fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
              >
                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl my-5">Guitar</h1>
            <p className="mb-5">
              Semi-hollowbody jazz guitar with vintage charm, offering a smooth,
              velvety tone ideal for jazz.
            </p>
            <h2 className="font-semibold mb-5">$34.99</h2>
            <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add To Cart
            </button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ProductSection;
