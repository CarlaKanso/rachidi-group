import Button from "../common/Button";

export default function ExportSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div class="relative flex items-center bg-gray-100">
            <span class="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div class="p-8 sm:p-16 lg:p-24">
              <h2 class="text-2xl font-bold sm:text-3xl">Export</h2>

              <p class="mt-4 text-gray-600">
                Our export section is dedicated to providing high-quality
                products for international customers. We work closely with our
                clients to ensure that their specific needs and requirements are
                met. Whether you&apos;re looking to order in bulk or have
                specific shipping requirements, our team is here to help. Our
                products are carefully sourced and meet all necessary standards
                and regulations for international shipping. Place your order
                today and experience our exceptional service and quality
                products.
              </p>

              <Button className="mt-4">
                <a href="#">Make a proforma</a>
              </Button>
            </div>
          </div>
          <div class="relative z-10 lg:py-16">
            <div class="relative h-64 sm:h-80 lg:h-full">
              {/* eslint-disable-next-line */}
              <img
                alt="Export"
                src=".\assets\images\export.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
