import { useEffect } from "react";
import BackTop from "./BackTop";
import { navData } from "../data";

const Header = () => {
  useEffect(() => {
    // Navbar fixed
    // saat window di scroll jalankan sebuah function
    window.onscroll = function () {
      const header = document.querySelector("header");
      // mengambil jarak dari posisi top headernya
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector("#to-top");

      if (window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    };

    // Hamburger
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    });

    //click di luar hamburger
    window.addEventListener("click", function (e) {
      if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    });

    // darkmode toggle
    const darkToggle = document.querySelector("#dark-toggle");
    const html = document.querySelector("html");

    darkToggle.addEventListener("click", function () {
      if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
      }
    });

    // pindahkan posisi toggle sesuai mode
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      // jika true posisinya ada dikanan
      darkToggle.checked = true;
    } else {
      darkToggle.checked = false;
    }
  });
  return (
    <>
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent" data-aos="fade-down" data-aos-delay="100">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a href="#home" className="block py-6 text-lg font-bold text-primary">
                adnanfathino
              </a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className="absolute right-4 block lg:hidden">
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  {navData.map((data, index) => (
                    <li className="group" key={index}>
                      <a href={data.link} className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
                        {data.list}
                      </a>
                    </li>
                  ))}

                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500">Light</span>
                      <input type="checkbox" id="dark-toggle" className="hidden" />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500">Dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <BackTop />
    </>
  );
};

export default Header;
