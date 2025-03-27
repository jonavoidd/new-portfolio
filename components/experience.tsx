import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimationWrapper from "./animation-wrapper";

const experiences = [
  {
    title: "Freelance Developer",
    company: "N/A",
    period: "2023 - Present",
    description:
      "Worked independently on various projects, focusing on frontend development for multiple web applications. Collaborated with clients to gather requirements, implemented new features and optimized performance",
    technologies: ["React", "Next.js", "Tailwind CSS", "WordPress"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimationWrapper>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-500 text-white px-3 py-1 text-sm">
                Career
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Work Experience
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                My professional journey and roles I&apos;ve held.
              </p>
            </div>
          </AnimationWrapper>
        </div>
        <div className="mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <AnimationWrapper key={index} delay={index * 150}>
              <Card className="relative overflow-hidden border-blue-100 dark:border-blue-900 hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-blue-500">
                        {exp.title}
                      </CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit border-blue-200 dark:border-blue-800"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
        <div className="mt-12 text-center">
          <AnimationWrapper delay={600}>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <Card className="border-blue-100 dark:border-blue-900">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-blue-500">
                      Bachelor of Science in Information Technology
                    </CardTitle>
                    <CardDescription>
                      Southwestern University PHINMA
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit border-blue-200 dark:border-blue-800"
                  >
                    2022 - Present
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
