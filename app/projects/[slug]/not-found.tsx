import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn&aops;t find the project you&aops;re looking for. It may
        have been moved or doesn&aops;t exist.
      </p>
      <Button asChild className="bg-blue-500 hover:bg-blue-600">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
    </div>
  );
}
