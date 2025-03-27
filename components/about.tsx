import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import AnimationWrapper from "./animation-wrapper";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <AnimationWrapper>
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] overflow-hidden rounded-full border-4 border-blue-500">
                <Image
                  src="/assets/images/me.jpg"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </AnimationWrapper>

          <div className="space-y-4">
            <AnimationWrapper>
              <div className="inline-block rounded-lg bg-blue-500 text-white px-3 py-1 text-sm">
                About Me
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={100}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Who I Am
              </h2>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <p className="text-muted-foreground md:text-lg">
                I&apos;m a full-stack software engineer currently studying
                AI-driven solutions, aiming to specialize in the field. I have
                experience in Python (FastAPI) and Node.js for backend
                development, along with React and Next.js for building modern
                applications. I integrate machine learning and generative AI to
                enhance development workflows. While pursuing my bachelor&apos;s
                degree at Southwestern University PHINMA, I&apos;ve worked on
                freelance projects and participated in hackathons, focusing on
                scalable and user-friendly applications.
              </p>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-blue-500 hover:bg-blue-600">
                  <Link href="#experience">My Experience</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-500 dark:hover:text-white dark:hover:bg-blue-900/20"
                >
                  <a
                    href="/john-doe-resume.pdf"
                    download="gozano_resume.pdf"
                    aria-label="Download Resume"
                  >
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
