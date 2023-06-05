export default function MapOffice() {
  const defaultProps = {
    center: {
      // 33.8547° N, 35.8623° E
      lat: 33.8547,
      lng: 35.8623,
    },
    zoom: 9,
  };
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
        <ul className="list-disc ml-4">
          <li>Monday - Friday: 8am - 4pm</li>
          <li>Saturday: 8am - 1pm</li>
          <li>Sunday: Closed</li>
        </ul>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        {/* <!-- Replace the iframe URL with the URL of your map --> */}
        <div style={{ height: "600px", width: "100%" }}></div>
      </div>
    </div>
  );
}
