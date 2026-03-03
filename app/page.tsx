import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import HeroITDecoration from "@/components/HeroITDecoration";
import HeroFadeInWrapper from "@/components/HeroFadeInWrapper";
import TypingTagline from "@/components/TypingTagline";
import OverviewCodeBlock from "@/components/OverviewCodeBlock";
import LogoIcon from "@/components/LogoIcon";
import BackToTopButton from "@/components/BackToTopButton";

const SKILLS = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    label: "Web Development",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    label: "Mobile Development",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
    label: "Quality Assurance",
  },
  {
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    label: "React & Node.js",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    label: "Express",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    label: "Flutter",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    label: "JavaScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    label: "UI Implementation",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    label: "Git",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    label: "Firebase",
  },
];

const MARQUEE_ITEMS = [
  "Web Development",
  "Mobile Development",
  "React",
  "Node.js",
  "Express",
  "Flutter",
  "Quality Assurance",
  "JavaScript",
  "UI Implementation",
];

const PROJECTS = [
  {
    num: "01",
    title: "Ecommerce Website",
    desc: "Collaborated with a 9-person team on a fully functional ecommerce platform. Back-end functionalities, bug fixing, and QA. React, Node.js, Express.",
    tags: ["React", "Node.js", "Express"],
  },
  {
    num: "02",
    title: "MyPabahay",
    desc: "Web-based inventory management and mobile app for Eco-Couture housing properties. Programmer on mobile app and back end. Buyers browse properties and submit application forms.",
    tags: ["Web", "Mobile", "Back end"],
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <section
        id="home"
        className="min-h-[100dvh] min-h-screen grid grid-cols-1 tablet:grid-cols-2 items-center pt-20 sm:pt-24 tablet:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 tablet:px-10 lg:px-16 relative overflow-hidden"
      >
        <HeroITDecoration />
        <div className="absolute font-bebas text-[6rem] sm:text-[8rem] tablet:text-[12rem] lg:text-[18rem] leading-[0.85] tracking-tight text-transparent [-webkit-text-stroke:1px] [border-color:var(--border)] right-[-1rem] sm:right-[-2rem] bottom-[-1rem] sm:bottom-[-2rem] select-none pointer-events-none text-border z-[1]">
          DEV
        </div>
        <HeroFadeInWrapper>
          <div className="relative z-10 flex flex-col gap-5">
            {/* Availability pill */}
            <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 w-fit rounded-full border border-border bg-cream/80 px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[0.7rem] font-medium text-ink">Open to opportunities</span>
            </div>
            {/* Greeting + name + profile image */}
            <div className="hero-animate hero-delay-2 flex flex-wrap items-center gap-3 sm:gap-4 tablet:gap-6 lg:gap-10">
              <div className="min-w-0">
                <p className="hero-animate hero-delay-1 text-muted text-xs sm:text-sm tablet:text-base mb-1">
                  Hi, I&apos;m
                </p>
                <h1 className="font-bebas text-3xl sm:text-4xl tablet:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight break-words">
                  <span className="text-ink">Amiel John</span>
                  <br />
                  <span className="bg-name-gradient bg-clip-text text-transparent">Metiam</span>
                </h1>
              </div>
              <div className="relative shrink-0 ml-4 sm:ml-8 tablet:ml-10 lg:ml-16">
                <div className="w-24 h-24 sm:w-32 sm:h-32 tablet:w-36 tablet:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full overflow-hidden border-2 border-border ring-2 ring-cream">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/profile.jpg"
                    alt="Amiel John Metiam"
                    className="w-full h-full object-cover block"
                    width={224}
                    height={224}
                  />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-9 h-9 md:w-11 md:h-11 rounded-full bg-accent flex items-center justify-center text-white border-2 border-paper">
                  <LogoIcon className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </div>
            </div>
            {/* Typing tagline */}
            <div className="hero-animate hero-delay-2 text-base sm:text-lg tablet:text-xl text-ink font-medium min-h-[2rem]">
              <TypingTagline />
            </div>
            {/* Bio */}
            <p className="hero-animate hero-delay-3 text-sm tablet:text-base text-muted max-w-[36ch] leading-relaxed">
              Keen about technology, with solid skills in software development —
              both web and mobile — and UI implementation. I focus on
              problem-solving and user-centered design, and I&apos;m always
              motivated to learn and contribute to meaningful projects.
            </p>
            {/* Location + status badges */}
            <div className="hero-animate hero-delay-3 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-paper/60 px-3 py-2 text-[0.75rem] text-muted">
                <span aria-hidden>📍</span>
                Pasig City, Philippines
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-paper/60 px-3 py-2 text-[0.75rem] text-muted">
                <span aria-hidden>💼</span>
                Open to opportunities
              </span>
            </div>
            {/* CTAs - touch-friendly on mobile */}
            <div className="hero-animate hero-delay-4 flex gap-2 sm:gap-3 flex-wrap">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 py-3 px-4 sm:px-6 rounded-lg text-[0.75rem] sm:text-[0.8rem] font-medium tracking-wide no-underline bg-accent text-white hover:opacity-90 transition-opacity btn-shine min-h-[44px]"
              >
                <LogoIcon className="w-4 h-4 shrink-0" />
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 py-3 px-4 sm:px-6 rounded-lg text-[0.75rem] sm:text-[0.8rem] font-medium tracking-wide no-underline bg-cream/80 text-ink border border-border hover:bg-cream hover:border-ink transition-colors btn-shine min-h-[44px]"
              >
                <span aria-hidden className="text-base">↓</span>
                Get in Touch
              </Link>
              <a
                href="/Metiam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-4 sm:px-6 rounded-lg text-[0.75rem] sm:text-[0.8rem] font-medium tracking-wide no-underline bg-paper/60 text-ink border border-border hover:bg-cream transition-colors min-h-[44px]"
              >
                <span aria-hidden className="text-base">↓</span>
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-animate hero-delay-5 relative z-10 w-full min-w-0 mt-8 tablet:mt-0">
            <OverviewCodeBlock />
          </div>
        </HeroFadeInWrapper>
      </section>

      <div className="border-t border-b border-border overflow-hidden py-3 sm:py-4 tablet:py-4 bg-cream marquee-pause">
        <div className="flex gap-6 sm:gap-8 tablet:gap-12 w-max animate-marquee">
          <div className="flex items-center gap-6 sm:gap-8 tablet:gap-12 font-bebas text-sm sm:text-base tablet:text-lg tracking-[0.15em] text-muted whitespace-nowrap">
            {MARQUEE_ITEMS.map((item) => (
              <span key={item}>
                {item} <span className="text-accent text-[0.65rem] sm:text-[0.7rem]">✦</span>{" "}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 sm:gap-8 tablet:gap-12 font-bebas text-sm sm:text-base tablet:text-lg tracking-[0.15em] text-muted whitespace-nowrap">
            {MARQUEE_ITEMS.map((item) => (
              <span key={item}>
                {item} <span className="text-accent text-[0.6rem] sm:text-[0.65rem] tablet:text-[0.7rem]">✦</span>{" "}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section id="about" className="py-12 sm:py-16 tablet:py-20 lg:py-24 px-4 sm:px-6 tablet:px-10 lg:px-16">
        <div className="flex items-center gap-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-accent mb-4">
          <span>About Me</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 tablet:gap-16 lg:gap-24 items-start">
          <Reveal>
            <div>
              <h2 className="font-bebas text-3xl sm:text-4xl tablet:text-5xl leading-tight tracking-tight mb-6 tablet:mb-8">
                Crafting <em className="font-serif italic text-accent">ideas</em>
                <br />
                into reality
              </h2>
              <p className="text-[1.05rem] text-muted leading-relaxed mb-5">
                I&apos;m a <strong className="text-ink font-medium">web and mobile developer</strong> with a strong emphasis on problem-solving and user-focused thinking. I&apos;m constantly motivated to learn, improve, and contribute to meaningful and innovative projects.
              </p>
              <p className="text-[1.05rem] text-muted leading-relaxed mb-5">
                My work spans full-stack web apps with React, Node.js, and Express, as well as mobile development. I&apos;m renowned for being flexible in hectic settings and at ease working both individually and collaboratively, while still seeking to advance both professionally and technically.
              </p>
              <p className="text-[1.05rem] text-muted leading-relaxed mb-5">
                When I&apos;m not coding, I&apos;m exploring new tools, refining my QA skills, or thinking about the next project that bridges design and functionality.
              </p>
            </div>
          </Reveal>
          <Reveal className="[transition-delay:150ms]">
            <div>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-4">
                Core Skills
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {SKILLS.map((skill) => (
                  <div
                    key={skill.label}
                    className="skill-pill-bar flex items-center gap-2 py-3 px-3 sm:px-4 border border-border text-[0.7rem] sm:text-[0.78rem] font-medium tracking-wide bg-cream hover:border-accent hover:pl-4 sm:hover:pl-6 transition-all"
                  >
                    {"icons" in skill ? (
                      <span className="flex items-center gap-1">
                        {(skill as { icons: string[] }).icons.map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt=""
                            width={22}
                            height={22}
                            className="w-[22px] h-[22px] object-contain shrink-0 transition-transform hover:scale-110"
                          />
                        ))}
                      </span>
                    ) : (
                      <img
                        src={(skill as { icon: string }).icon}
                        alt=""
                        width={22}
                        height={22}
                        className="w-[22px] h-[22px] object-contain shrink-0 transition-transform hover:scale-110"
                      />
                    )}
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="py-12 sm:py-16 tablet:py-20 lg:py-24 px-4 sm:px-6 tablet:px-10 lg:px-16 bg-paper">
        <div className="flex items-center gap-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-accent mb-4">
          <span>Selected Work</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <Reveal>
          <h2 className="font-bebas text-3xl sm:text-4xl tablet:text-5xl leading-tight tracking-tight mb-8 tablet:mb-12">
            Recent <em className="font-serif italic text-accent">projects</em>
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              tabIndex={0}
              className={`group project-item-hover rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper grid grid-cols-1 tablet:grid-cols-[1fr_auto_auto] items-start tablet:items-center gap-3 tablet:gap-6 lg:gap-8 px-4 sm:px-5 tablet:px-6 py-6 tablet:py-8 border-b border-border relative ${i ? "[transition-delay:100ms]" : ""}`}
              data-project-item
            >
              <div className="relative z-[1] min-w-0 tablet:order-1">
                <h3 className="font-bebas text-xl sm:text-2xl tablet:text-3xl tracking-wide leading-none mb-1 transition-colors supports-[hover:hover]:group-hover:text-accent group-active:text-accent group-focus-visible:text-accent">
                  {project.title}
                </h3>
                <p className="text-[0.75rem] sm:text-[0.82rem] text-muted">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2 tablet:hidden">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] tracking-[0.1em] uppercase py-1 px-2 border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden tablet:flex gap-2 flex-wrap justify-end relative z-[1] tablet:order-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-[0.1em] uppercase py-1 px-2 border border-border text-muted transition-colors supports-[hover:hover]:group-hover:border-accent supports-[hover:hover]:group-hover:text-accent group-active:border-accent group-active:text-accent group-focus-visible:border-accent group-focus-visible:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xl tablet:text-2xl text-border transition-all relative z-[1] supports-[hover:hover]:group-hover:text-accent supports-[hover:hover]:group-hover:translate-x-1 supports-[hover:hover]:group-hover:-translate-y-1 group-active:text-accent group-active:translate-x-1 group-active:-translate-y-1 group-focus-visible:text-accent group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 tablet:order-3">
                ↗
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <Education />

      <section
        id="contact"
        className="bg-cream text-ink py-12 sm:py-16 tablet:py-20 lg:py-24 px-4 sm:px-6 tablet:px-10 lg:px-16 relative overflow-hidden border-t border-border"
      >
        <div className="absolute font-bebas text-[6rem] tablet:text-[10rem] lg:text-[20rem] right-[-1rem] tablet:right-[-2rem] top-1/2 -translate-y-1/2 text-transparent [-webkit-text-stroke:1px] [stroke:rgba(232,230,227,0.06)] pointer-events-none leading-none">
          HELLO
        </div>
        <div className="flex items-center gap-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-accent mb-4 relative z-10">
          <span>Get In Touch</span>
          <span className="flex-1 h-px bg-ink/10" />
        </div>
        <Reveal>
          <h2 className="font-bebas text-3xl sm:text-4xl tablet:text-5xl leading-tight tracking-tight mb-8 tablet:mb-12 text-ink relative z-10">
            Let&apos;s build
            <br />
            something <em className="font-serif italic text-accent">great</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 tablet:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 tablet:gap-16 lg:gap-20 items-start relative z-10">
          <Reveal>
            <p className="text-lg text-muted leading-relaxed mb-10">
              Open to opportunities and collaboration. Reach out for projects,
              questions, or a quick hello.
            </p>
            <div className="flex flex-col gap-6">
              <a
                href="mailto:ajpmetiam@gmail.com"
                className="flex items-center gap-4 no-underline text-ink text-[0.85rem] tracking-wide transition-colors pb-6 border-b border-border hover:text-accent"
              >
                <span className="w-6 text-base">✉</span>
                <span className="break-all">ajpmetiam@gmail.com</span>
              </a>
              <a
                href="tel:+639777849108"
                className="flex items-center gap-4 no-underline text-ink text-[0.85rem] tracking-wide transition-colors pb-6 border-b border-border hover:text-accent"
              >
                <span className="w-6 text-base">☎</span>
                <span>+63 977 784 9108</span>
              </a>
              <a
                href="https://linkedin.com/in/amiel-metiam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 no-underline text-ink text-[0.85rem] tracking-wide transition-colors pb-6 border-b border-border hover:text-accent"
              >
                <span className="w-6 text-base">in</span>
                <span>linkedin.com/in/amiel-metiam</span>
              </a>
              <a
                href="https://github.com/Mieeelll"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 no-underline text-ink text-[0.85rem] tracking-wide transition-colors pb-6 border-b border-border hover:text-accent"
              >
                <span className="w-6 text-base">gh</span>
                <span>github.com/Mieeelll</span>
              </a>
            </div>
          </Reveal>
          <Reveal className="[transition-delay:150ms]">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="bg-paper text-muted py-6 sm:py-8 px-4 sm:px-6 tablet:px-10 lg:px-16 flex flex-col tablet:flex-row justify-between items-center gap-4 border-t border-border text-[0.7rem] sm:text-[0.75rem] tracking-[0.08em] text-center tablet:text-left">
        <span>© {new Date().getFullYear()} Amiel John Metiam. All rights reserved.</span>
        <div className="flex flex-wrap items-center justify-center tablet:justify-end gap-3">
          <span>Built with care ✦</span>
          <BackToTopButton />
        </div>
      </footer>
    </>
  );
}
