export default function Brands() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Our brands
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Discover our exceptional range of brands and experience the essence
            of quality of our products.
          </p>
        </header>
        {/* eslint-disable-next-line */}
        <img
          className="h-auto max-w-full"
          src="/assets/images/brands.jpg"
          alt="image description"
        />
      </div>
    </section>
  );
}
