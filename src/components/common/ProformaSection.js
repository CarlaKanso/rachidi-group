export default function ProformaSection() {
  return (
    <div>
      <h2 class="sr-only">Steps</h2>

      <div class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
        <ol class="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          <li class="flex items-center gap-2 bg-white p-2">
            <span class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
              1
            </span>

            <span class="hidden sm:block"> Choose your products </span>
          </li>

          <li class="flex items-center gap-2 bg-white p-2">
            <span class="h-6 w-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">
              2
            </span>

            <span class="hidden sm:block"> View proforma </span>
          </li>

          <li class="flex items-center gap-2 bg-white p-2">
            <span class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
              3
            </span>

            <span class="hidden sm:block"> Submit </span>
          </li>
        </ol>
      </div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p class="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div class="mt-8 flex items-center justify-between">
            <div class="flex rounded border border-gray-100">
              <button class="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button>

              <button class="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>

            <div>
              <label for="SortBy" class="sr-only">
                SortBy
              </label>

              <select id="SortBy" class="h-10 rounded border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>
          </div>

          <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" class="group block overflow-hidden">
                {/* eslint-disable-next-line */}
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block overflow-hidden">
                {/* eslint-disable-next-line */}
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block overflow-hidden">
                {/* eslint-disable-next-line */}
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block overflow-hidden">
                {/* eslint-disable-next-line */}
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
