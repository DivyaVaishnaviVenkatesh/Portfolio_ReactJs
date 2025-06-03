import { Brain, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Machine Learning Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science Engineering student passionate about building meaningful digital experiences through web development and data-driven solutions.
            </p>

            <p className="text-muted-foreground">
              With hands-on experience in projects like flight fare prediction, credit card approval, and an AI wellness app, I enjoy blending creativity with problem-solving using technologies like React, Django, Python, and ML frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Crafting responsive web apps using React, HTML, CSS, and Django for real-world use cases.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Solving prediction problems using Python, Pandas, Scikit-learn, and XGBoost with real datasets.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Data</h4>
                  <p className="text-muted-foreground">
                    Developed end-to-end solutions like MyWellness App, E-commerce site, and Salary Prediction dashboard.
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
