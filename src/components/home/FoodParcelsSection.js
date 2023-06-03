import Button from "../common/Button";

export default function FoodParcelsSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative flex items-center bg-gray-100 dark:bg-gray-800">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100 dark:lg:bg-gray-800"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-100">Food Parcels</h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our food parcel section is dedicated to providing high-quality,
                nutritious food options to individuals and families in need. We
                carefully select and package a variety of food items to create
                parcels that meet the specific needs and preferences of our
                customers. Our team is committed to ensuring that our parcels
                are delivered on time and in excellent condition. Whether
                you&apos;re looking to order a single parcel or multiple parcels
                for an organization or event, our team is here to help. Place
                your order today and experience the convenience and quality of
                our food parcel service.
              </p>

              <Button className="mt-4">
                <a href="#">Make a proforma</a>
              </Button>
            </div>
          </div>
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              {/* eslint-disable-next-line */}
              <img
                alt="food parcels"
                src="./assets/images/foodParcels.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
