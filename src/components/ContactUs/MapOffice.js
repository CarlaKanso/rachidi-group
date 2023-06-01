export default function MapOffice() {
  return (
    <div class="flex flex-wrap justify-between">
      <div class="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-2xl font-bold mb-4">Opening Hours</h2>
        <ul class="list-disc ml-4">
          <li>Monday - Friday: 8am - 4pm</li>
          <li>Saturday: 8am - 1pm</li>
          <li>Sunday: Closed</li>
        </ul>
        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-4">Social Media</h2>
          <div class="flex space-x-4">
            <a href="#" class="text-blue-500 hover:text-blue-700">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" class="text-blue-500 hover:text-blue-700">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" class="text-blue-500 hover:text-blue-700">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Our Location</h2>
        <div class="h-64 mb-8">
          {/* <!-- Replace the iframe URL with the URL of your map --> */}
          <iframe
            src="https://www.google.com/maps"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
