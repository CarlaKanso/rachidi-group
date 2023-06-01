export default function Mission() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              {/* eslint-disable-next-line */}
              <img
                alt="wholesale"
                src="./assets/images/mission.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Our mission and values
              </h2>

              <p className="mt-4 text-gray-600">
                At Rachidi Group, our mission is to provide our customers with
                the highest quality food products and exceptional service, both
                locally and internationally. We are committed to ensuring that
                our products meet the highest standards of quality, safety, and
                sustainability, and we strive to exceed our customers&apos;
                expectations at every opportunity. We are also committed to
                building strong relationships with our suppliers and partners.
                We believe in working collaboratively to achieve mutual success,
                and we prioritize transparency, honesty, and fairness in all of
                our interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
