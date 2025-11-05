import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[var(--card-bg)] rounded-lg p-12 shadow-lg">
      <section className="text-center space-y-6">
        <Image
          src="/profile2.jpg"
          alt="Ashwin"
          width={250}
          height={250}
          className="mx-auto rounded-full border-4 border-[var(--accent)]"
        />
        
        <h1 className="text-5xl font-bold">Hi, I'm Ashwin 👋</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Computer Engineering student.
        </p>

        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {["AWS","Terraform","GitHub Actions","Python","Java","TypeScript","React/Next.js","SQL"].map(s=>(
            <li key={s} className="rounded-full border border-[var(--card-border)] px-3 py-1">{s}</li>
          ))}
        </ul>

        <div className="flex gap-3 justify-center">
          <a href="/resume.pdf" className="px-5 py-2 rounded-md bg-[var(--accent)] text-white font-medium hover:bg-[var(--button-hover)] transition">
            View Resume
          </a>
          <a href="/projects" className="px-5 py-2 rounded-md border border-[var(--card-border)] font-medium hover:bg-[var(--card-bg)] transition">
            See Projects
          </a>
        </div>
      </section>
    </div>
  );
}
