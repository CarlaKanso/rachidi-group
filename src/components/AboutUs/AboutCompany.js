export default function AboutCompany() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative flex items-center bg-gray-100 dark:bg-gray-800">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100 dark:lg:bg-gray-800"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-100">Who we are?</h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Rachidi Group is a leading trading company based in Lebanon,
                with a strong presence in both the local market and
                international trade. We specialize in the export of high-quality
                food stuff to other countries, including a wide range of
                products such as grains, spices, oils, and more. Our team of
                experts is dedicated to ensuring that our products meet the
                highest quality standards, and we have established long-term
                partnerships with suppliers and customers around the world. In
                addition to our international trade, we also have a thriving
                local market in Lebanon, where we offer a variety of
                high-quality food products to our customers. Our commitment to
                quality, reliability, and customer satisfaction has made us a
                trusted partner for businesses and individuals alike. Contact us
                today to learn more about our products and services.
              </p>
            </div>
          </div>
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              {/* eslint-disable-next-line */}
              <img
                alt="Company"
                src=".\assets\images\company.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
