type Project = { title: string; desc: string; stack: string[]; link?: string };

const projects: Project[] = [
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
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <article key={p.title} className="rounded-2xl border border-gray-800 p-5 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {p.stack.map(t => <span key={t} className="rounded-full bg-gray-800 px-2 py-1">{t}</span>)}
            </div>
            {p.link && <a href={p.link} className="text-sm underline mt-3 inline-block">View</a>}
          </article>
        ))}
      </div>
    </section>
  );
}
