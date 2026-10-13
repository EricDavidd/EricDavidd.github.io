import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multi-threaded DNS Resolver",
    description:
      "A concurrent DNS resolver written in C using POSIX threads. The system uses requester and resolver thread pools, synchronized shared queues, and controlled thread termination to safely process large hostname workloads while maintaining complete audit logs.",
    image: "/projects/dns-resolver.png",
    tags: [
      "C",
      "POSIX Threads",
      "Concurrency",
      "DNS",
      "Mutexes",
      "Multithreading",
      "Linux",
    ],
    githubUrl: "https://github.com/EricDavidd/Multi-threaded-DNS-Resolver",
  },

  {
    id: 2,
    title: "Multithreaded HTTP Proxy Server",
    description:
      "A multithreaded HTTP proxy server built in C using TCP sockets and POSIX threads. Supports concurrent client requests, hostname resolution, HTTP forwarding, host-based access controls, and synchronized TTL-based response caching.",
    image: "/projects/http-proxy.png",
    tags: [
      "C",
      "TCP/IP",
      "HTTP",
      "POSIX Threads",
      "Sockets",
      "Caching",
      "Networking",
    ],
    githubUrl: "https://github.com/EricDavidd/multithreaded-http-proxy",
  },

  {
    id: 3,
    title: "WhatsHappenin",
    description:
      "A location-based news platform that lets users place pins on a global map and discover curated local news for selected locations. Built with a responsive frontend and a Node.js/PostgreSQL backend for dynamic news retrieval.",
    image: "/projects/project1.png",
    tags: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TailwindCSS",
      "Bootstrap",
      "Docker",
      "Axios",
    ],
    demoUrl: "https://whatshappenin.onrender.com/",
    githubUrl: "https://github.com/lukewu1/WhatsHappenin",
  },

  {
    id: 4,
    title: "Natural Highs",
    description:
      "Collaborated on a web platform for the nonprofit Natural Highs, helping develop responsive interfaces and secure survey functionality. Implemented Firebase Authentication to manage user access while supporting a mobile-friendly experience.",
    image: "/projects/project2.png",
    tags: [
      "JavaScript",
      "TypeScript",
      "Svelte",
      "Firebase",
      "TailwindCSS",
      "Authentication",
    ],
    githubUrl: "https://github.com/AidanDonnelly1/Natural-Highs",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects spanning systems programming, networking,
            security, and full-stack development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};