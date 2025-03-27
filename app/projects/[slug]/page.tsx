import { projects } from "@/components/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-4 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-white dark:hover:bg-blue-900/20"
          >
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="space-y-4">
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
              <p className="text-muted-foreground">{project.challenges}</p>
            </div> */}
          </div>

          <div className="space-y-6">
            <Card className="border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.demoLink ? (
                  <Button
                    asChild
                    className="w-full bg-blue-500 hover:bg-blue-600"
                  >
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                  >
                    <span className="mr-2">•</span>
                    Not Hosted
                  </Button>
                )}
              </CardContent>
            </Card>
            <Card className="border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.frontend?.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.backend?.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Deployment</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.deployment.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
