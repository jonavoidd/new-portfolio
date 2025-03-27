import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import AnimationWrapper from "./animation-wrapper";

export default function Hero() {
  return (
    <section id="home" className="py-24 md:py_32">
      <div className="container flex justify-center items-center px-4 md:px-6 h-[700]">
        <div className="flex flex-col items-center gap-4 text-center">
          <AnimationWrapper>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="text-blue-500">Kurt Jonathan Gozano</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A Full Stack Developer specializing in building exceptional
                applications integrated with AI
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row">
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-500 dark:hover:text-white dark:hover:bg-blue-900"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={400}>
            <div className="flex gap-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-white dark:hover:bg-blue-900/20"
              >
                <Link
                  href="https://github.com/jonavoidd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-white dark:hover:bg-blue-900/20"
              >
                <Link
                  href="https://www.linkedin.com/in/kurt-jonathan-gozano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-white dark:hover:bg-blue-900/20"
              >
                <Link href="mailto:kurtjonathangozano@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
