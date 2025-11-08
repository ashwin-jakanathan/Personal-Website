import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-4xl bg-[var(--card-bg)] rounded-xl shadow-lg
                      px-4 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 animate-fade-in-up">
        <section className="text-center space-y-6">
          <Image
            src="/profile2.jpg"
            alt="Ashwin"
            width={250}
            height={250}
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 250px"
            priority
            className="mx-auto rounded-full border-4 border-[var(--accent)]
                       w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover
                       animate-expand-hover hover:glow transition-all duration-300"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}>
            Hi, I'm Ashwin 👋
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] animate-fade-in-up"
             style={{ animationDelay: "0.3s" }}>
            Computer Engineering student.
          </p>

          <ul className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2
                         text-xs sm:text-sm max-w-2xl animate-children">
            {["AWS","Terraform","GitHub Actions","Python","Java","TypeScript","React/Next.js","SQL"].map((s, i)=>(
              <li key={s} className="rounded-full border border-[var(--card-border)] px-3 py-1 text-center
                                     transition-all duration-300 hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]
                                     hover:scale-105 cursor-pointer"
                  style={{
                    animationDelay: `${0.4 + i * 0.05}s`,
                  }}>
                {s}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up"
               style={{ animationDelay: "0.6s" }}>
            <a
              href="/resume.pdf"
              className="px-4 sm:px-5 py-2 rounded-md bg-[var(--accent)] text-white font-medium
                         hover:bg-[var(--button-hover)] transition-all duration-300 hover:scale-105
                         hover:shadow-lg cursor-pointer"
            >
              View Resume
            </a>
            <a
              href="/projects"
              className="px-4 sm:px-5 py-2 rounded-md border border-[var(--card-border)] font-medium
                         hover:bg-white/5 hover:border-[var(--accent)] transition-all duration-300
                         hover:scale-105 cursor-pointer"
            >
              See Projects
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
