import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./animation-wrapper";

// Enhanced project data with slugs and more detailed information
export const projects = [
  {
    title: "Speech to Text",
    slug: "speech-to-text",
    description:
      "A speech-to-text application utilizing OpenAI's Whisper model for accurate transcription.",
    image: "/assets/projects/text-to-speech-ss.png",
    tags: ["Next.js", "FastAPI", "OpenAI", "Whisper"],
    demoLink: "",
    longDescription:
      "An innovative application that converts speech into text using OpenAI's Whisper model. Built with a Next.js frontend and FastAPI backend, it provides real-time transcription capabilities and supports multiple languages.",
    features: [
      "Real-time speech recognition",
      "Support for multiple languages",
      "User-friendly interface for easy interaction",
      "Text export and sharing options",
      "Customizable settings for transcription accuracy",
      "Integration with various audio input sources",
    ],
    challenges:
      "Ensuring high accuracy in transcription while handling diverse accents and background noise was a significant challenge. I addressed this by fine-tuning the model and implementing noise reduction techniques.",
    technologies: {
      frontend: ["Next.js", "React.js", "Tailwind CSS"],
      backend: ["FastAPI", "Python", "OpenAI", "Whisper"],
      deployment: ["Vercel"],
    },
  },
  {
    title: "Michhub",
    slug: "michhub",
    description:
      "A portfolio website for a graphics design company specializing in both image and video graphics.",
    image: "/assets/projects/michhub-ss.png",
    tags: ["WordPress", "HTML", "CSS", "JavaScript"],
    demoLink: "https://michhub.com",
    longDescription:
      "This portfolio showcases the creative work of a graphics design company, featuring both stunning images and engaging video graphics. Built primarily with WordPress, I utilized HTML, CSS, and JavaScript to customize the design and enhance functionality, ensuring a unique and user-friendly experience.",
    features: [
      "Responsive design for optimal viewing on all devices",
      "Gallery showcasing images and video projects",
      "Custom animations and transitions for an engaging user experience",
      "Contact form for inquiries and project requests",
      "Blog section for sharing design insights and updates",
      "SEO optimized for better visibility in search engines",
    ],
    challenges:
      "Customizing the WordPress theme to meet specific design requirements while ensuring compatibility with various plugins was a challenge. I overcame this by carefully selecting plugins and writing custom code to achieve the desired look and functionality.",
    technologies: {
      frontend: ["WordPress", "HTML", "CSS", "JavaScript"],
      backend: ["WordPress"],
      deployment: ["WordPress Hosting"],
    },
  },
  {
    title:
      "Car Dealership Admin & Service Reservation Platform (school project)",
    slug: "car-dealership",
    description:
      "A CMS website for car dealership administration and service reservations management.",
    image: "/assets/projects/car-dealership-ss.png",
    tags: ["React.js", "React Native", "Flask", "Tailwind CSS", "CMS"],
    demoLink: "",
    longDescription:
      "An administrative platform developed for car dealership management, focusing on sales tracking and service reservations. The system provides dealership staff with tools to manage inventory, customer appointments, and service requests through an intuitive interface.",
    features: [
      "Sales management dashboard",
      "Service reservation system",
      "Inventory tracking",
      "Customer appointment scheduling",
      "Administrative user management",
      "Data reporting and analytics",
    ],
    challenges:
      "Creating a system that seamlessly integrated both sales and service operations while maintaining a clean administrative interface was challenging. I implemented role-based access controls and optimized the database structure to handle high-volume dealership operations efficiently.",
    technologies: {
      frontend: ["React", "Tailwind CSS", "React Router"],
      backend: ["Flask", "SQLAlchemy", "REST API"],
      deployment: ["Docker", "AWS"],
    },
  },
  {
    title: "Buzzy Cafe Full-Stack Application (school project)",
    slug: "buzzy-cafe",
    description: "A full-stack web and mobile application for a cafe business.",
    image: "/assets/projects/buzzy-ss.png",
    tags: ["React.js", "Kotlin", "Laravel", "Full-stack", "Mobile"],
    demoLink: "",
    longDescription:
      "A comprehensive cafe management solution featuring both web and mobile platforms. The system enables customers to browse menus, place orders, and make reservations, while providing staff with tools for order management and customer service.",
    features: [
      "Multi-platform ordering system (web & mobile)",
      "Menu management with categories and customization",
      "Online reservation system",
      "Order tracking and status updates",
      "Customer account management",
      "Admin dashboard for business analytics",
    ],
    challenges:
      "Developing a consistent user experience across web and mobile platforms while maintaining synchronized data flow was challenging. I implemented real-time updates using web sockets and optimized the API structure to support both React.js and Kotlin clients efficiently.",
    technologies: {
      frontend: ["React.js", "Tailwind CSS", "React Router"],
      mobile: ["Kotlin", "Android SDK"],
      backend: ["PHP Laravel", "Supabase", "PostgreSql", "REST API"],
      deployment: ["Docker", "AWS"],
    },
  },
  {
    title: "SiguradoSys (school project)",
    slug: "market-distributor",
    description:
      "A full-stack web and mobile application for private market distribution management.",
    image: "/assets/projects/siguradosys-ss.png",
    tags: ["PHP", "Java", "HTML/CSS", "Full-stack", "Mobile"],
    demoLink: "",
    longDescription:
      "A comprehensive distribution management system connecting suppliers with private markets through web and mobile platforms. The application streamlines order processing, inventory management, and delivery tracking for wholesale distributors.",
    features: [
      "Multi-platform order management system",
      "Real-time inventory tracking",
      "Supplier and retailer portals",
      "Delivery route optimization",
      "Sales analytics dashboard",
      "Mobile order fulfillment interface",
    ],
    challenges:
      "Integrating the Java mobile application with the PHP backend while maintaining data consistency across platforms proved challenging. I implemented robust API synchronization and developed custom caching mechanisms to ensure smooth operation in areas with poor connectivity.",
    technologies: {
      web: ["PHP", "HTML5", "CSS3", "JavaScript"],
      mobile: ["Java", "Android SDK"],
      backend: ["PHP", "MySQL", "REST API"],
      deployment: ["Apache", "AWS EC2"],
    },
  },
  {
    title: "Interior Designer Portfolio Website",
    slug: "interior-designer-portfolio",
    description:
      "A portfolio website for an interior designer to showcase their work.",
    image: "/assets/projects/designer-ss.png",
    tags: ["React.js", "Tailwind CSS", "Portfolio", "Responsive Design"],
    demoLink: "https://gedinteriordesigns.netlify.app/",
    longDescription:
      "A visually striking portfolio website designed to showcase an interior designer's projects and services. The website features a clean, modern aesthetic with responsive galleries that highlight the designer's work while maintaining excellent performance across all devices.",
    features: [
      "Project showcase gallery",
      "Responsive image grids",
      "Service offerings display",
      "Contact and inquiry forms",
      "Mobile-optimized navigation",
      "Performance-optimized assets",
    ],
    challenges:
      "Creating image-heavy galleries that load quickly while maintaining high visual quality required careful optimization. I implemented lazy loading, modern image formats, and a responsive grid system to ensure excellent performance without compromising the visual impact of the designer's work.",
    technologies: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion"],
      deployment: ["Netlify", "GitHub Actions"],
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimationWrapper>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-500 text-white px-3 py-1 text-sm">
                Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Recent Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Here are some of the projects I&apos;ve worked on recently.
              </p>
            </div>
          </AnimationWrapper>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((project, index) => (
            <AnimationWrapper key={index} delay={index * 100}>
              <Card className="overflow-hidden border-blue-100 dark:border-blue-900 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
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
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    size="sm"
                    asChild
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <AnimationWrapper delay={400}>
            <Button
              variant="outline"
              asChild
              className="border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-500 dark:hover:text-white dark:hover:bg-blue-900/20"
            >
              <Link
                href="https://github.com/jonavoidd"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More on GitHub
              </Link>
            </Button>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
