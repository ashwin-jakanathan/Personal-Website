type Project = { title: string; desc: string; stack: string[]; link?: string };

const projects: Project[] = [
  {
    title: "Rift Rewind 2025 — Are You The Problem?",
    desc: "Hackathon team submission (Oct 2025). Built an AI-driven League of Legends analytics platform that generates personalized gameplay insights using AWS Bedrock and the Riot Games API. Developed a full-stack Next.js app with dynamic dashboards and deployed via Vercel with GitHub CI/CD.",
    stack: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Node.js",
      "AWS Bedrock",
      "Riot Games API",
      "Vercel",
      "GitHub Actions",
    ],
    link: "#",
  },
  {
    title: "Super Smash Bros Replica",
    desc: "Developed a Super Smash Bros replica in Python, coordinating team efforts to emulate the game mechanics. Designed architecture, implemented character movement and combat, integrated audio-visual elements, and optimized performance. Demonstrated expertise in Python programming, game development, and teamwork.",
    stack: ["Python", "Game Development"],
    link: "#"
  },
  {
    title: "E-Commerce Database Application",
    desc: "Designed a campus marketplace DBMS with entities for users, products, orders, and payments. Implemented advanced Oracle SQL queries and automated database operations using Unix Shell scripts in a Linux environment. Generated reports and ensured data consistency to support secure, reliable transactions.",
    stack: ["Oracle SQL", "Unix Shell", "Linux", "Database Design"],
    link: "#"
  },
  {
    title: "Serverless Portfolio Backend",
    desc: "Contact form API with monitoring (CloudWatch) + alerts (SNS).",
    stack: ["API Gateway","Lambda (Python)","DynamoDB","SES","Terraform"],
    link: "#",
  },
  {
    title: "Bookstore Management",
    desc: "Java OOP + State Pattern with persistent file storage.",
    stack: ["Java","OOP","State Pattern","File I/O"],
  },
  {
    title: "Student Course Planner",
    desc: "JavaFX app using topological sort for prerequisite planning.",
    stack: ["JavaFX","Algorithms"],
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left animate-fade-in-up">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-children">
        {projects.map(p => (
          <article
            key={p.title}
            className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]
                       p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300
                       animate-expand-hover hover:glow cursor-pointer group"
          >
            <h3 className="text-xl font-semibold group-hover:text-[var(--accent-light)] transition-colors duration-300">
              {p.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)]">{p.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
              {p.stack.map((t, i) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--card-border)]
                             px-2 py-1 bg-white/40 dark:bg-white/5 transition-all duration-300
                             hover:bg-[var(--accent)]/20 hover:border-[var(--accent)] hover:scale-110"
                  style={{
                    transitionDelay: `${i * 30}ms`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link}
                className="mt-4 inline-block text-sm underline hover:opacity-80 transition-opacity duration-200"
              >
                View →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}