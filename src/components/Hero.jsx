const Hero = () => {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2" data-aos="fade-down" data-aos-delay="400">
            <h1 className="animate__animated animate__fadeInTopLeft animate__slow text-base font-semibold text-primary md:text-xl">
              Hi Guys 👋. My name is<span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">Adnan Fathino</span>
            </h1>
            <h2 className="animate__animated animate__fadeInUpBig animate__slow mb-5 text-lg font-medium text-secondary lg:text-2xl">
              Fresh <span className="text-dark dark:text-white">Graduate</span>
            </h2>
            <p className="animate__animated animate__jackInTheBox animate__slow mb-10 font-medium leading-relaxed text-secondary">
              I graduated from D3-Electrical Engineering at Politeknik Negeri Jakarta in 2022. I have an interest in <span className="font-semibold text-dark dark:text-white">website development programming.</span>
            </p>
            <div>
              <a href="https://wa.me/6285883056168" className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
                Contact me
              </a>
            </div>
          </div>
          <div className=" w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-0" data-aos="fade-down" data-aos-delay="400">
              <img src="/Adnan.png" alt="Adnan" className="mx-auto max-w-xs rounded-full lg:max-w-full" />
              <span className="absolute bottom-10 left-1/2 -z-10 -translate-x-1/2 md:scale-125">
                <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#14b8a6"
                    d="M54.2,-60.6C66.4,-54.3,69.8,-33.6,71,-14.3C72.3,5,71.4,22.9,64.7,40C58,57.2,45.4,73.6,28.8,80C12.2,86.4,-8.3,82.9,-21.2,72.2C-34,61.4,-39.1,43.5,-45.6,28.3C-52.2,13,-60,0.5,-60.7,-13.3C-61.3,-27.1,-54.7,-42.2,-43.4,-48.7C-32.1,-55.1,-16,-52.9,2.5,-55.8C21,-58.8,42,-66.9,54.2,-60.6Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
