import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-white dark:bg-black">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-start lg:gap-8">
        <div class="text-blue-600 dark:text-blue-600">
          <svg class="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
              fill="currentColor"
            />
          </svg>
        </div>
  
        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div class="col-span-2">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Subscribe for updates!</h2>
  
              <p class="mt-4 text-gray-500 dark:text-gray-400">
                Stay updated with the latest movie releases, reviews, and more.
              </p>
            </div>
          </div>
  
          <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            <form class="w-full">
              <label for="UserEmail" class="sr-only"> Email </label>
  
              <div
                class="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Enter your email address"
                  class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-black outline-none dark:text-white"
                />
  
                <button
                  class="mt-1 w-full bg-blue-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900 dark:text-white">Movies</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <Link to={'/trending'} class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Trending
                </Link>
              </li>
  
              <li>
                <Link to={'/movie'}  class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Movie
                </Link>
              </li>
  
              <li>
                <Link to={'/popular'} class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Popular
                </Link>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900 dark:text-white">Genres</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Action
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Drama
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Comedy
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Sci-Fi
                </a>
              </li>
            </ul>
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900 dark:text-white">Explore</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  About Us
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Contact
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Privacy Policy
                </a>
              </li>
  
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex gap-6">
            <a href="#" class="text-blue-500 transition hover:opacity-75">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22.675 0h-21.35C.597 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.62h3.127V8.413c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.917.001c-1.503 0-1.796.714-1.796 1.763v2.311h3.589l-.467 3.62h-3.122V24h6.116c.732 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
  
            <a href="#" class="text-blue-300 transition hover:opacity-75">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M8.29 19.14c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.348 8.348 0 0 0 22 4.344a8.164 8.164 0 0 1-2.357.637 4.075 4.075 0 0 0 1.804-2.225 8.224 8.224 0 0 1-2.605.986 4.102 4.102 0 0 0-7.057 2.797 4.071 4.071 0 0 0 .104.935A11.654 11.654 0 0 1 1.675 3.148a4.072 4.072 0 0 0 1.268 5.456 4.072 4.072 0 0 1-1.857-.507v.051a4.102 4.102 0 0 0 3.292 4.01 4.092 4.092 0 0 1-1.853.07 4.107 4.107 0 0 0 3.834 2.82A8.21 8.21 0 0 1 0 17.813a11.62 11.62 0 0 0 6.29 1.814"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
  
            <a href="#" class="text-pink-600 transition hover:opacity-75">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.243 1.308 3.608.058 1.267.069 1.646.069 4.851 0 3.204-.012 3.584-.07 4.85-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.267.058-1.646.069-4.851.069-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.267-.069-1.646-.069-4.851 0-3.204.012-3.584.07-4.85.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.267-.058 1.646-.069 4.851-.069zM12 0C8.741 0 8.332.012 7.052.071 5.775.129 4.592.373 3.533 1.433 2.473 2.492 2.23 3.675 2.171 4.948 2.111 6.227 2.099 6.637 2.099 9.896c0 3.26.012 3.67.071 4.949.058 1.277.302 2.46 1.362 3.52 1.059 1.06 2.242 1.303 3.515 1.363 1.279.059 1.688.071 4.948.071s3.67-.012 4.949-.071c1.277-.058 2.46-.302 3.52-1.362 1.06-1.059 1.303-2.242 1.363-3.515.059-1.279.071-1.688.071-4.948s-.012-3.67-.071-4.949c-.058-1.277-.302-2.46-1.362-3.52-1.059-1.059-2.242-1.303-3.515-1.363-1.279-.059-1.688-.071-4.948-.071zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
  
            <a href="#" class="text-red-600 transition hover:opacity-75">
              <span class="sr-only">YouTube</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M23.498 6.186a2.971 2.971 0 0 0-2.093-2.104C19.535 3.5 12 3.5 12 3.5s-7.534 0-9.405.582A2.971 2.971 0 0 0 .502 6.186C0 8.065 0 12 0 12s0 3.935.502 5.814a2.971 2.971 0 0 0 2.093 2.104C4.466 20.5 12 20.5 12 20.5s7.535 0 9.405-.582a2.971 2.971 0 0 0 2.093-2.104C24 15.935 24 12 24 12s0-3.935-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
  
          <p class="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
            &copy; 2023 Company Name
          </p>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
