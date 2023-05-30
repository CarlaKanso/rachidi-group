import Button from "../common/Button";

export default function WholesaleSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div class="relative z-10 lg:py-16">
            <div class="relative h-64 sm:h-80 lg:h-full">
              {/* eslint-disable-next-line */}
              <img
                alt="wholesale"
                src="./assets/images/superMarket.jpeg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div class="relative flex items-center bg-gray-100">
            <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div class="p-8 sm:p-16 lg:p-24">
              <h2 class="text-2xl font-bold sm:text-3xl">
                Wholesale and Retail
              </h2>

              <p class="mt-4 text-gray-600">
                Welcome to our wholesale and retail section! We offer
                personalized service and competitive pricing for businesses and
                individuals looking to purchase our high-quality products. Our
                carefully sourced products meet all necessary quality standards,
                and we&apos;re committed to ensuring that our customers receive
                the best possible value. Whether you&apos;re looking to order in
                bulk or just need a few items for personal use, our team is here
                to help. Place your order today and experience the convenience
                and quality of our wholesale and retail services.
              </p>

              <Button className="mt-4">
                <a href="#">Make a proforma</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
