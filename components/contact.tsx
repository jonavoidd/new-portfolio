"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimationWrapper from "./animation-wrapper";

const FORMSPREE_FORM_ID = "xgvalgre";

export default function Contact() {
  const { toast } = useToast();
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setFormState("submitting");

      const form = e.currentTarget;
      const formData = new FormData(form);

      // Submit to Formspree
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setFormState("success");
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });

        // Reset form
        form.reset();
      } else {
        setFormState("error");
        setErrorMessage(
          responseData.error || "There was a problem sending your message."
        );
        toast({
          title: "Error sending message",
          description:
            responseData.error ||
            "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      setFormState("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      toast({
        title: "Error sending message",
        description:
          "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimationWrapper>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-500 text-white px-3 py-1 text-sm">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Have a question or want to work together? Feel free to reach
                out!
              </p>
            </div>
          </AnimationWrapper>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <AnimationWrapper delay={100}>
            <Card className="border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-blue-500">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="border-blue-200 dark:border-blue-800 focus:ring-blue-500"
                        disabled={formState === "submitting"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="border-blue-200 dark:border-blue-800 focus:ring-blue-500"
                        disabled={formState === "submitting"}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="border-blue-200 dark:border-blue-800 focus:ring-blue-500"
                      disabled={formState === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      className="min-h-[120px] border-blue-200 dark:border-blue-800 focus:ring-blue-500"
                      disabled={formState === "submitting"}
                    />
                  </div>

                  {/* Honeypot field to prevent spam */}
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />

                  {formState === "success" && (
                    <div className="flex items-center p-3 text-sm rounded-md bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Your message has been sent successfully!
                    </div>
                  )}

                  {formState === "error" && (
                    <div className="flex items-center p-3 text-sm rounded-md bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errorMessage ||
                        "There was an error sending your message. Please try again."}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimationWrapper>

          <AnimationWrapper delay={200}>
            <Card className="border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-blue-500">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Here are the ways you can reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      kurtjonathangozano@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +63 927 329 0535
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Cebu City, Cebu, Philippines
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-blue-200 dark:border-blue-800 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <a
                        href="https://github.com/jonavoidd/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-blue-200 dark:border-blue-800 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <a
                        href="https://www.linkedin.com/in/kurt-jonathan-gozano/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
