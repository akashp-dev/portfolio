import { Github, LinkedinIcon, Twitter, FileText } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container py-8 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedinIcon size={18} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={18} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={18} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={18} />
            <span className="sr-only">Resume</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
