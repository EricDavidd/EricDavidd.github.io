import { Briefcase, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Cybersecurity & Identity Security Professional
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student at the University of Colorado
              Boulder graduating in May 2027, with hands-on experience across
              identity and access management, vulnerability management, cloud
              security, and security automation.
            </p>

            <p className="text-muted-foreground">
              Currently, I work as an Identity and Access Management Student
              Analyst at CU Boulder, where I support enterprise identity systems
              including Microsoft Entra ID, Active Directory, LDAP, and
              Shibboleth SSO. My work includes troubleshooting authentication
              and authorization issues, validating identity data, and supporting
              secure account lifecycle and access management.
            </p>

            <p className="text-muted-foreground">
              Through two internships at CrowdStrike, I've built security
              automation and vulnerability management solutions using
              technologies including AWS, Python, Go, ServiceNow, Slack, and
              CrowdStrike Falcon. I'm especially interested in solving complex
              security problems through automation and building systems that
              make security operations more scalable, reliable, and efficient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume_EricDavid_March.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Security Experience */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Security Engineering
                  </h4>

                  <p className="text-muted-foreground">
                    Professional experience across vulnerability management,
                    identity security, cloud security, and security automation
                    through roles at CrowdStrike and CU Boulder's Office of
                    Information Technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Focus */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Building & Learning
                  </h4>

                  <p className="text-muted-foreground">
                    I build security-focused tools and systems while continuing
                    to develop my skills through technical projects, security
                    labs, CTFs, and hands-on exploration of modern security
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};