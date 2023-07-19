import React from "react";

function Navbar() {

    

 
    return (
        <nav>
        <div>
        <div
        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        <ul
          class="mr-auto flex flex-col lg:flex-row"
          data-te-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Home</a
            >
          </li>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Stylist</a
            >
          </li>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >About</a
            >
          </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
  }

export default Navbar