import { skillData } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-700 pt-36 pb-32 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Skills</h4>
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">Keahlian saya</h2>
            <p className="text-md font-medium text-secondary md:text-lg">Teknologi yang sering saya gunakan</p>
          </div>
        </div>
        <div className="w-full px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap items-center justify-center">
            {skillData.map((skill, index) => (
              <a href="#" className="w-[150px] h-[150px] border box-border p-5 rounded-full hover:bg-violet-300" key={index} data-aos="fade-down" data-aos-delay={skill.delay} data-aos-offset="200">
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
