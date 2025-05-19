import {
    Linkedin,
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  
  export const ContactSection = () => {
    return (
      <section
        id="contact"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Get In <span className="text-primary">Touch</span>
          </h2>
  
          <div className="flex justify-center">
            <div className="space-y-8 text-left max-w-md">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
  
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:Eric.David@colorado.edu"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Eric.David@colorado.edu
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/eric-david-b664118b/"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                    >
                      https://www.linkedin.com/in/eric-david-b664118b/
                    </a>
                  </div>
                </div>
  
  
                {/* Phone */}
                {/* <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div> */}
  
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <span className="text-muted-foreground">Boulder, CO</span>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </section>
    );
  };
  