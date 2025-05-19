import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WhatsHappenin",
    description: "A location-based news app that lets users drop pins on a map to discover local headlines.",
    image: "/projects/project1.png",
    tags: [
        "HTML",
        "JavaScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "TailwindCSS",
        "Bootstrap",
        "Handlebars.js",
        "Docker",
        "Mocha",
        "Chai",
        "Axios"
      ],
    demoUrl: "https://whatshappenin.onrender.com/",
    githubUrl: "https://github.com/lukewu1/WhatsHappenin",
  },
  {
    id: 2,
    title: "Natural Highs",
    description:
      "Developed an admin dashboard for Natural Highs, a nonprofit organization, enabling staff to create, manage, and distribute surveys to their community. The platform streamlines data collection and improves engagement tracking through a user-friendly interface.",
    image: "/projects/project2.png",
    tags: [
        "HTML",
        "JavaScript",
        "TypeScript",
        "Svelte",
        "Firebase",
        "TailwindCSS"
      ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Exploratoria",
    description:
      "Exploratoria is a 2D top-down game that takes inspiration from museums to provide an enjoyable learning experience. It won first place at the Colorado Technology Student Association competition. It was coded using C# with the Unity platform.",
    image: "/projects/project3.png",
    tags: ["Unity", "C#"],
    demoUrl: "https://noahschwartz.itch.io/exploratoria",
    githubUrl: "https://github.com/NoahBSchwartz/Exploratoria?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};