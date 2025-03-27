"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUp,
  MapPin,
  Phone,
  Facebook,
} from "lucide-react";
import AnimationWrapper from "./animation-wrapper";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollToElement } = useSmoothScroll({ offset: 80 });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle Navigation Clicks
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    scrollToElement(targetId);
    window.history.pushState({}, "", `#${targetId}`);
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Back to top button */}
      <div
        className={`fixed bottom-6 right-6 transition-opacity duration-300 z-50 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-md bg-blue-500 hover:bg-blue-600 text-white"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About & Copyright */}
          <AnimationWrapper>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-500">
                Kurt Jonathan Gozano
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-stack software engineer specializing in AI-driven
                solutions. Currently studying at Southwestern University PHINMA
                while working on freelance projects and hackathons.
              </p>
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Kurt Gozano. All rights reserved.
              </p>
            </div>
          </AnimationWrapper>

          {/* Navigation Links */}
          <AnimationWrapper delay={100}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => handleNavClick(e, "home")}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => handleNavClick(e, "about")}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => handleNavClick(e, "projects")}
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => handleNavClick(e, "skills")}
                >
                  Skills
                </Link>
                <Link
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => handleNavClick(e, "experience")}
                >
                  Experience
                </Link>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </AnimationWrapper>

          {/* Contact Information */}
          <AnimationWrapper delay={200}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <a
                    href="mailto:your.email@example.com"
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                    aria-label="Email me"
                  >
                    kurtjonathangozano@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-muted-foreground">
                    +63 927 329 0535
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-muted-foreground">
                    Cebu City, Cebu, Philippines
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  aria-label="GitHub Profile"
                >
                  <a
                    href="https://github.com/jonavoidd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  aria-label="LinkedIn Profile"
                >
                  <a
                    href="https://www.linkedin.com/in/kurt-jonathan-gozano/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  aria-label="Facebook Profile"
                >
                  <a
                    href="https://web.facebook.com/kurtjonathan.gozano.75"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </footer>
  );
}
