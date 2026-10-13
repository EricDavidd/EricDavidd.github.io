import {
  Briefcase,
  Calendar,
  MapPin,
  ShieldCheck,
  Monitor,
  GraduationCap,
  Wrench,
} from "lucide-react";

const experiences = [
  {
    company: "CrowdStrike",
    role: "Cyber Intern",
    dates: "May 2026 – August 2026",
    location: "Remote",
    icon: ShieldCheck,
    description: [
      "Designed and built VulnEngage, a Slack-native cloud vulnerability remediation platform integrating Falcon CSPM, ServiceNow, AWS Lambda, API Gateway, and DynamoDB.",
      "Engineered event-driven workflows to automate vulnerability routing, remediation tracking, escalation, and ServiceNow synchronization.",
      "Developed an AI-powered Network Vulnerability Assessment scan-health reviewer using Python, AgentForge/Vulcan, and Slack integrations.",
    ],
    technologies: [
      "CrowdStrike Falcon",
      "AWS",
      "Python",
      "ServiceNow",
      "Slack",
      "DynamoDB",
    ],
  },
  {
    company: "University of Colorado Boulder – Office of Information Technology",
    role: "Identity and Access Management Student Analyst",
    dates: "November 2025 – Present",
    location: "Boulder, CO",
    icon: ShieldCheck,
    description: [
      "Resolve escalated authentication and authorization issues across enterprise identity systems including Shibboleth SSO, Microsoft Entra ID, Active Directory, and LDAP.",
      "Use SQL to validate identity attributes and support secure provisioning, deprovisioning, and account lifecycle management.",
      "Contribute to Agile initiatives focused on improving identity security, access governance, and IAM workflows.",
    ],
    technologies: [
      "Entra ID",
      "Active Directory",
      "LDAP",
      "Shibboleth",
      "SQL",
      "IAM",
    ],
  },
  {
    company: "CrowdStrike",
    role: "Information Security Launch Intern – Vulnerability Technical Operations",
    dates: "May 2025 – August 2025",
    location: "Remote",
    icon: ShieldCheck,
    description: [
      "Designed and deployed an AI-driven vulnerability monitoring and triage system using a Go-based ETL pipeline on AWS.",
      "Aggregated NIST CVE and internal security data into LogScale to improve vulnerability detection and investigation workflows.",
      "Automated ServiceNow threat assessments and real-time Slack alerts while contributing to AI-driven security automation initiatives.",
    ],
    technologies: [
      "Go",
      "AWS",
      "LogScale",
      "ServiceNow",
      "Slack",
      "Vulnerability Management",
    ],
  },
  {
    company: "University of Colorado Boulder – Office of Information Technology",
    role: "Dedicated Desktop Support",
    dates: "February 2025 – November 2025",
    location: "Boulder, CO",
    icon: Monitor,
    description: [
      "Supported university Windows and macOS endpoints by troubleshooting hardware, software, and device-management issues.",
      "Deployed and managed university systems through Microsoft Azure Active Directory and JAMF Pro.",
      "Resolved and prioritized technical incidents through ServiceNow for university faculty and staff.",
    ],
    technologies: [
      "Azure AD",
      "JAMF Pro",
      "ServiceNow",
      "Windows",
      "macOS",
    ],
  },
  {
    company: "University of Colorado Boulder",
    role: "Instructional Assistant",
    dates: "January 2024 – May 2025",
    location: "Boulder, CO",
    icon: GraduationCap,
    description: [
      "Supported Calculus I and Calculus II instruction by creating supplementary learning materials and leading targeted review sessions.",
      "Used student performance data to identify areas of difficulty and tailor instructional support.",
      "Worked closely with faculty and students to improve engagement and understanding of challenging technical concepts.",
    ],
    technologies: [
      "Technical Communication",
      "Teaching",
      "Data Analysis",
      "Collaboration",
    ],
  },
  {
    company: "District 70 – Pueblo County High School",
    role: "Electronic Repair Helpdesk Technician",
    dates: "June 2022 – July 2023",
    location: "Pueblo, CO",
    icon: Wrench,
    description: [
      "Provided hands-on technical support to district staff and students by diagnosing and resolving hardware and software issues.",
      "Maintained and repaired district-issued technology to improve device reliability and longevity.",
      "Coordinated with IT professionals and external vendors, including Apple, to document issues and manage technical resolutions.",
    ],
    technologies: [
      "Hardware Support",
      "Troubleshooting",
      "IT Support",
      "Customer Service",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Career <span className="text-primary">Experience</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            My experience spans cybersecurity, identity and access management,
            enterprise IT, technical support, and education expanding from
            hands-on troubleshooting into security engineering and automation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${experience.company}-${experience.role}`}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="p-3 rounded-full bg-background border border-primary shadow-sm">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`
                      ml-14 md:ml-0
                      ${
                        isLeft
                          ? "md:col-start-1 md:pr-8"
                          : "md:col-start-2 md:pl-8"
                      }
                    `}
                  >
                    <div className="gradient-border p-6 card-hover text-left">
                      {/* Role */}
                      <h3 className="text-xl font-semibold mb-1">
                        {experience.role}
                      </h3>

                      {/* Company */}
                      <h4 className="text-primary font-medium mb-3">
                        {experience.company}
                      </h4>

                      {/* Date + Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-5">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.dates}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 text-muted-foreground mb-5">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};