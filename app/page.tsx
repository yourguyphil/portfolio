import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { ArrowIcon, ChevronUpIcon, DownloadIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { projects, site, skills, stats, volunteering } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/images/profile.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Atlanta", addressRegion: "GA", addressCountry: "US" },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Hi, I&apos;m</p>
              <h1>{site.name}</h1>
              <p className="hero-role">{site.role}</p>
              <p className="hero-sub">
                I design fast, reliable, and secure systems, and I build the tools and games I&apos;d
                want to use myself. Based in {site.location}.
              </p>
              <div className="hero-actions">
                <a href={site.resume} className="btn btn-primary plausible-event-name=Resume+Download">
                  <DownloadIcon /> Download Resume
                </a>
                <a href="#projects" className="btn btn-ghost">
                  View projects
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <Image
                src="/images/profile.webp"
                alt="Portrait of Philips Nguyen"
                width={560}
                height={560}
                priority
                sizes="(max-width: 768px) 260px, 380px"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container split">
            <Reveal>
              <h2 className="heading">About me</h2>
            </Reveal>
            <Reveal delay={100} className="prose">
              <p>
                Hi! My name is <strong>Philips Nguyen</strong>, a backend software engineer based in
                Atlanta, GA.
              </p>
              <p>
                I have over 7 years of experience designing and implementing solutions in the
                financial and retail industries using Scrum Agile.
              </p>
              <p>
                I&apos;m passionate about building fast, reliable, and secure systems that deliver an
                exceptional experience for end users.
              </p>
              <p>
                Known by my teams as a thoughtful and creative engineer, I take pride in delivering
                efficient and intuitive solutions I would personally want to use.
              </p>
              <p>
                Outside of work, I serve as a Regional Team Lead for the{" "}
                <strong>Vietnamese Eucharistic Youth Movement (VEYM)</strong>, where I mentor
                developers and help design digital platforms supporting thousands of members
                nationwide.
              </p>

              <ul className="volunteer">
                {volunteering.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <dl className="stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-alt">
          <div className="container split">
            <Reveal>
              <h2 className="heading">Skills</h2>
            </Reveal>
            <div className="skill-groups">
              {skills.map((group, i) => (
                <Reveal key={group.title} delay={i * 60}>
                  <h3 className="skill-title">{group.title}</h3>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <Reveal>
              <h2 className="heading center">Projects</h2>
            </Reveal>

            <div className="projects">
              {projects.map((p) => (
                <Reveal key={p.slug}>
                  <article className={`project ${p.featured ? "featured" : ""}`}>
                    <div className={`project-image ${p.pixelArt ? "pixel" : ""}`}>
                      <Image
                        src={p.image}
                        alt={`${p.title} logo`}
                        width={p.pixelArt ? 630 : 280}
                        height={p.pixelArt ? 500 : 280}
                        sizes="(max-width: 768px) 80vw, 280px"
                      />
                    </div>
                    <div className="project-info">
                      {p.badge && <span className="badge">{p.badge}</span>}
                      <h3>{p.title}</h3>
                      {p.description.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                      <ul className="chips small" aria-label="Built with">
                        {p.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      <div className="project-links">
                        {p.links.map((l, idx) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn ${idx === 0 && p.featured ? "btn-primary" : "btn-ghost"} plausible-event-name=${encodeURIComponent(l.event).replace(/%20/g, "+")}`}
                          >
                            {l.label} <ArrowIcon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-alt">
          <div className="container contact">
            <Reveal>
              <h2 className="heading center">Get in touch</h2>
              <p className="contact-lede">
                Have a project, a role, or just want to say hi? Send a message and I&apos;ll get back to you.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} Philips Nguyen</p>
          <a href="#top" className="to-top" aria-label="Back to top">
            <ChevronUpIcon />
          </a>
          <ul className="socials">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
