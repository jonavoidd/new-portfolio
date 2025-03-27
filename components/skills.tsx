import AnimationWrapper from "./animation-wrapper";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Material UI",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
      "Firebase",
      "Docker",
    ],
  },
  {
    title: "Others",
    skills: ["Git", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimationWrapper>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-500 text-white px-3 py-1 text-sm">
                Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                A comprehensive overview of my technical skills and expertise.
              </p>
            </div>
          </AnimationWrapper>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimationWrapper key={category.title} delay={categoryIndex * 150}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-500 text-center">
                  {category.title}
                </h3>
                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <AnimationWrapper
                      key={skill}
                      delay={categoryIndex * 100 + skillIndex * 50}
                    >
                      <div className="border border-blue-200 dark:border-blue-800 rounded-md p-3 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 bg-card">
                        <span className="font-medium">{skill}</span>
                      </div>
                    </AnimationWrapper>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
