import { portfolioData } from "../data";

const Portofolio = () => {
  return (
    <section id="portfolio" className="bg-slate-100 pt-36 pb-36 dark:bg-slate-800">
      <div className="container">
        <div className="w-full p-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Latest Project</h2>
            <p className="text-md font-medium text-secondary md:text-lg">The projects below are projects that i have made before</p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {portfolioData.map((porto, index) => (
            <div className="mb-12 p-4 md:w-1/2" key={index} data-aos="fade-down" data-aos-delay={porto.delay} data-aos-offset="200">
              <div className="overflow-hidden rounded-md shadow-md">
                <a href={porto.link}>
                  <img src={porto.image} alt={porto.name} width="w-full" />
                </a>
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">{porto.name}</h3>
              <p className="text-base font-medium text-secondary">
                <b>Fitur</b>: {porto.fitur} <br />
                <b>Teknologi</b>: {porto.teknologi}
              </p>
              <div className="mt-2 flex justify-end gap-3">
                <a href={porto.github} className="text-md rounded-md bg-blue-500 py-1 px-2 text-white">
                  source code
                </a>
                <a href={porto.link} className={`text-md text-slate600 rounded-md ${porto.visit ? "bg-violet-500" : "bg-slate-400"}  py-1 px-3 text-white`}>
                  visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
