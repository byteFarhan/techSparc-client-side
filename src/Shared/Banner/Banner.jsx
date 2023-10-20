const Banner = () => {
  return (
    <div>
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: "url(https://i.postimg.cc/mDnrXhfp/the-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-2xl font-bold md:text-3xl lg:text-4xl">
              Discover the Best in Technology and Electronics Products
            </h1>
            <p className="mb-5 md:text-lg">
              Welcome to techSparc, your premier source for the latest in
              Technology and Electronics. Dive into a world of innovation and
              explore top-notch products from industry leaders like Apple,
              Samsung, Sony, Google, Intel, and more. From smartphones to smart
              home gadgets, we curate the finest tech solutions for your digital
              lifestyle. Stay ahead of the curve and experience the future
              today. Start your tech journey with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
