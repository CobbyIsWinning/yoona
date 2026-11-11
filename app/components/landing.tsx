"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reducedMotion;
}

export function Icon({
  name = "arrow",
  className = "",
}: {
  name?: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v16M6 14l6 6 6-6" />,
    layers: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
    spark: (
      <>
        <path d="M12 2v5m0 10v5M2 12h5m10 0h5M5 5l3.5 3.5m7 7L19 19M5 19l3.5-3.5m7-7L19 5" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    orbit: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <ellipse cx="12" cy="12" rx="4" ry="8.5" transform="rotate(45 12 12)" />
        <path d="M4 9h16M4 15h16" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    pause: <path d="M8 5v14M16 5v14" />,
    play: <path d="m9 5 10 7-10 7V5Z" />,
  };
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="header-inner page-width">
          <a
            className="wordmark"
            href="#"
            aria-label="Yoona home"
            onClick={() => setOpen(false)}
          >
            yoona<span>®</span>
          </a>
          <nav
            id="main-navigation"
            className={`main-nav ${open ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#platform" onClick={() => setOpen(false)}>
              The platform
            </a>
            <a href="#teams" onClick={() => setOpen(false)}>
              For your team
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              Our story
            </a>
            <a href="#resources" onClick={() => setOpen(false)}>
              Resources
            </a>
            <a
              className="mobile-login"
              href="https://design.yoona.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Log in <Icon name="diagonal" />
            </a>
          </nav>
          <div className="header-actions">
            <a
              className="login-link"
              href="https://design.yoona.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Log in <Icon name="diagonal" />
            </a>
            <a
              className="button button-dark nav-demo"
              href="https://www.yoona.ai/demo"
              target="_blank"
              rel="noreferrer"
            >
              Request demo <Icon />
            </a>
            <button
              className="menu-toggle"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="main-navigation"
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

type FashionLook = {
  src: string;
  alt: string;
  flatlay?: boolean;
  source?: string;
  backdrop?: string;
};

const looks: FashionLook[] = [
  {
    src: "/images/pinterest-menswear-flatlay.jpg",
    alt: "Menswear outfit collage with a black leather jacket, blue jeans, tan boots, and coordinated accessories, styled by Nele",
    flatlay: true,
    backdrop: "#85847c",
    source: "https://www.pinterest.com/pin/1070519773946992300/",
  },
  {
    src: "/images/pinterest-outfit-flatlay.jpg",
    alt: "Autumn outfit flatlay with a camel belted coat, brown vest, leather bag, trousers, boots, and gold accessories",
    flatlay: true,
    source: "https://www.pinterest.com/pin/854487729346245262/",
  },
  {
    src: "/images/editorial-street.jpg",
    alt: "Street style featuring a blue tailored coat in Milan",
  },
  {
    src: "/images/editorial-details.jpg",
    alt: "A white blouse paired with a pleated neutral skirt",
  },
  {
    src: "/images/editorial-dress.jpg",
    alt: "A flowing pale blue dress in natural light",
  },
  {
    src: "/images/fashion-archive.jpg",
    alt: "A colourful curated collection of garments",
  },
  {
    src: "/images/garment-jacket.jpg",
    alt: "The material and construction of a contemporary jacket",
  },
];

export function FashionCollage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [{ focusedImage, visibleImages }, setGallery] = useState(() => ({
    focusedImage: 1,
    visibleImages: [0, 1, 2, 3],
    remainingImages: looks.slice(4).map((_, index) => index + 4),
  }));
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      const gallery = galleryRef.current;
      if (!gallery || document.hidden) return;
      const bounds = gallery.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      if (
        gallery.querySelector(
          ".fashion-gallery-select:focus-visible, .fashion-gallery-caption a:focus-visible",
        )
      )
        return;
      setGallery((current) => {
        const outgoing = current.visibleImages[current.focusedImage];
        const incoming = current.remainingImages[0];
        return {
          focusedImage:
            (current.focusedImage + 1) % current.visibleImages.length,
          visibleImages: current.visibleImages.map((image, slot) =>
            slot === current.focusedImage ? incoming : image,
          ),
          remainingImages: [...current.remainingImages.slice(1), outgoing],
        };
      });
    }, 3000);
    return () => window.clearInterval(timer);
  }, [focusedImage, paused, reducedMotion]);

  const focusImage = (index: number) =>
    setGallery((current) =>
      current.focusedImage === index
        ? current
        : { ...current, focusedImage: index },
    );

  return (
    <div
      ref={galleryRef}
      className="fashion-gallery page-width"
      role="group"
      aria-label="Fashion inspiration"
    >
      {visibleImages.map((imageIndex, index) => {
        const item = looks[imageIndex];
        return (
          <figure
            key={index}
            data-image-index={imageIndex}
            className={focusedImage === index ? "is-focused" : ""}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") focusImage(index);
            }}
            onFocusCapture={() => focusImage(index)}
          >
            <button
              className="fashion-gallery-select"
              aria-label={`Focus fashion image ${index + 1}`}
              aria-pressed={focusedImage === index}
              onClick={() => focusImage(index)}
            >
              <div
                className={`fashion-gallery-photo ${item.flatlay ? "is-flatlay" : ""}`}
                style={{
                  backgroundColor:
                    item.backdrop || (item.flatlay ? "#e9e1ce" : "#f5f5f5"),
                }}
              >
                <Image
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 50vw, 25vw"
                  preload={index === 0 && imageIndex === 0}
                  loading={
                    index === 0 && imageIndex === 0 ? undefined : "eager"
                  }
                />
              </div>
            </button>
            <figcaption className="fashion-gallery-caption">
              <span>
                {item.source ? "Outfit inspiration" : "A new perspective"}
              </span>
              {item.source && (
                <a
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View original inspiration for image ${index + 1}`}
                >
                  <Icon name="diagonal" />
                </a>
              )}
            </figcaption>
          </figure>
        );
      })}
      <button
        className="gallery-rotation-toggle"
        onClick={() => setPaused((current) => !current)}
        disabled={reducedMotion}
        aria-label={
          reducedMotion
            ? "Automatic highlights disabled for reduced motion"
            : paused
              ? "Resume image highlights"
              : "Pause image highlights"
        }
      >
        <Icon name={paused || reducedMotion ? "play" : "pause"} />
        {reducedMotion
          ? "Manual selection"
          : paused
            ? "Resume highlights"
            : "Pause highlights"}
      </button>
    </div>
  );
}

const colourways = [
  {
    name: "Pearl",
    colour: "#c9cdca",
    background: "#f5f5f3",
    caption: "A fresh starting point.",
  },
  {
    name: "Sage",
    colour: "#89917a",
    background: "#eef2e8",
    caption: "A different point of view.",
  },
  {
    name: "Oxblood",
    colour: "#943e36",
    background: "#f7e9e6",
    caption: "An unexpected next direction.",
  },
];

export function ScrollBelt() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;
      const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
      const travel = section.offsetHeight - stage.offsetHeight;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (stickyTop - section.getBoundingClientRect().top) /
            Math.max(1, travel),
        ),
      );
      stage.style.setProperty("--belt-progress", `${progress * 100}%`);
      const position = progress * (colourways.length - 1);
      stage.style.setProperty("--belt-position", String(position));
      setActive(Math.round(position));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      stageRef.current?.style.setProperty("--belt-position", String(active));
    }
  }, [active, reducedMotion]);

  const selectColourway = (index: number) => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (reducedMotion || !section || !stage) {
      setActive(index);
      return;
    }
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const travel = section.offsetHeight - stage.offsetHeight;
    window.scrollTo({
      top:
        window.scrollY +
        section.getBoundingClientRect().top -
        stickyTop +
        travel * (index / (colourways.length - 1)),
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="scroll-belt"
      id="possibilities"
      aria-labelledby="belt-heading"
      data-colourway={active}
      style={{ backgroundColor: colourways[active].background }}
    >
      <div ref={stageRef} className="belt-stage">
        <div className="belt-layout page-width">
          <div className="belt-copy">
            <p className="eyebrow">
              <span className="status-dot" /> ONE IDEA. ENDLESS DIRECTIONS.
            </p>
            <h2 id="belt-heading">
              Same instinct.
              <br />
              New <em>possibilities.</em>
            </h2>
            <p>
              A different colour. A fresh point of view. Explore what your next
              collection could become.
            </p>
            <div
              className="belt-swatches"
              aria-label="Choose a jacket colourway"
            >
              {colourways.map((colourway, index) => (
                <button
                  key={colourway.name}
                  onClick={() => selectColourway(index)}
                  aria-pressed={active === index}
                  className={active === index ? "active" : ""}
                >
                  <span style={{ backgroundColor: colourway.colour }} />
                  {colourway.name}
                </button>
              ))}
            </div>
            <span className="belt-scroll-cue">
              {reducedMotion
                ? "CHOOSE A COLOUR TO EXPLORE"
                : "SCROLL TO REIMAGINE"}
              <Icon name="down" />
            </span>
          </div>
          <div className="belt-product">
            <span className="belt-product-label">THE COLOUR STUDY / 01</span>
            <div
              className="belt-garment"
              role="img"
              aria-label={`Puffer jacket concept in ${colourways[active].name.toLowerCase()}`}
            >
              <div className="belt-track" aria-hidden="true">
                {colourways.map((colourway, index) => (
                  <div
                    key={colourway.name}
                    className="belt-jacket"
                    style={{ backgroundPosition: `${index * 50}% center` }}
                  />
                ))}
              </div>
            </div>
            <div className="belt-product-caption" aria-live="polite">
              <span>{colourways[active].caption}</span>
              <span>0{active + 1} / 03</span>
            </div>
          </div>
        </div>
        <div className="belt-footer page-width">
          <span>AI-GENERATED GARMENT STUDY</span>
          <div className="belt-progress" aria-hidden="true">
            <span />
          </div>
          <a
            href="https://www.pinterest.com/pin/1093671090781202495/"
            target="_blank"
            rel="noreferrer"
          >
            Motion inspiration <Icon name="diagonal" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BuildFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  const userPaused = useRef(false);
  const reducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const updatePlayback = () => {
      if (
        inView.current &&
        !document.hidden &&
        !reducedMotion &&
        !userPaused.current
      ) {
        void video.play().catch(() => {
          /* Native controls remain available if autoplay is blocked. */
        });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current =
          entry.isIntersecting && entry.intersectionRatio >= 0.35;
        updatePlayback();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      inView.current = false;
      video.pause();
    };
  }, [reducedMotion]);

  return (
    <figure className="build-film" aria-labelledby="build-film-heading">
      <figcaption className="build-film-copy">
        <p className="eyebrow">THE CREATIVE PROCESS, IN MOTION</p>
        <h3 id="build-film-heading">
          From a little inspiration.
          <br />
          To <em>something real.</em>
        </h3>
        <p>
          A look behind the scenes of a fashion shoot. The people, the details,
          and the craft behind a collection.
        </p>
        <a
          className="text-link"
          href="https://www.pinterest.com/pin/1001839879579990109/"
          target="_blank"
          rel="noreferrer"
        >
          Watch the original <Icon name="diagonal" />
        </a>
        <span className="build-film-credit">
          HTHR · Lindsey Schumacher Media
        </span>
      </figcaption>
      <div className="build-film-player">
        <video
          ref={videoRef}
          controls
          muted
          loop
          playsInline
          preload="none"
          poster="/images/build-fashion-poster.jpg"
          aria-label="Behind the scenes of the HTHR fashion shoot"
          onPlay={() => {
            setPlaying(true);
            userPaused.current = false;
          }}
          onPause={() => {
            setPlaying(false);
            if (inView.current && !document.hidden) userPaused.current = true;
          }}
          onError={() => setFailed(true)}
        >
          <source src="/videos/build-fashion-film-20s.mp4" type="video/mp4" />
          <a href="https://www.pinterest.com/pin/1001839879579990109/">
            Watch the fashion film on Pinterest.
          </a>
        </video>
        <div className="build-film-status">
          <span>
            <span className={`status-dot ${playing ? "is-playing" : ""}`} />
            {failed
              ? "WATCH VIA THE ORIGINAL LINK"
              : playing
                ? "THE CREATIVE PROCESS / PLAYING"
                : "THE CREATIVE PROCESS / PRESS PLAY"}
          </span>
          <span>SOUND OFF BY DEFAULT</span>
        </div>
      </div>
    </figure>
  );
}

function GarmentSketch() {
  return (
    <svg
      className="garment-sketch"
      viewBox="0 0 240 280"
      fill="none"
      aria-label="Technical fashion drawing of a tailored jacket"
      role="img"
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
        <path d="m85 41-27 13-32 91 25 11 26-63-9 132h105L164 93l26 63 25-11-32-91-28-13-35 11-35-11Z" />
        <path d="m85 41 7 36 27-25 27 25 9-36M92 77l-8 14 36 46 36-46-10-14M120 137v88M79 156l26-2v25l-28 2M137 154l26 2 2 25-28-2M78 93l-9-23M164 93l9-23M31 133l24 11M185 144l24-11" />
        <circle cx="129" cy="156" r="2" />
        <circle cx="129" cy="177" r="2" />
        <circle cx="129" cy="198" r="2" />
        <path
          d="M120 52v38M68 237h105M65 233v8M176 233v8M223 56v170M219 56h8M219 226h8"
          strokeDasharray="2 3"
        />
        <path d="M89 24h62M85 20v8M155 20v8" />
      </g>
      <g fill="currentColor" fontFamily="monospace" fontSize="7">
        <text x="104" y="19">
          CONCEPT 01
        </text>
        <text x="104" y="251">
          YOUR NEXT IDEA
        </text>
        <text x="232" y="154" transform="rotate(90 232 154)">
          A WORK IN POSSIBILITY
        </text>
      </g>
    </svg>
  );
}

const workflows = [
  {
    name: "Build",
    icon: "spark",
    subtitle: "Make room for the next big idea.",
    description:
      "Connect inspiration with your brand’s own knowledge. Explore new directions, develop concepts, and keep your creative DNA at the heart of every collection.",
    features: [
      "Explore and develop ideas",
      "Build on your brand knowledge",
      "Keep your creativity in the lead",
    ],
    caption: "A space for your next collection",
    prompt: "Explore a new direction for our everyday collection.",
    response: "Let’s start with your brand DNA.",
    detail: "A considered palette. Familiar shapes. A fresh perspective.",
    image: "/images/editorial-street.jpg",
  },
  {
    name: "Decide",
    icon: "orbit",
    subtitle: "More context. More confidence.",
    description:
      "Bring product and commercial data into the same conversation. Give your team a connected view of what you know, so the next decision starts with a clearer picture.",
    features: [
      "Connect product and business context",
      "Explore questions with your data",
      "Keep people in control of decisions",
    ],
    caption: "Turn your knowledge into your next move",
    prompt: "What should we consider for our next collection?",
    response: "The bigger picture starts here.",
    detail: "Your product knowledge and commercial context, together.",
    image: "/images/editorial-details.jpg",
  },
  {
    name: "Handoff",
    icon: "layers",
    subtitle: "Keep the momentum. Lose the silos.",
    description:
      "Great ideas deserve a smoother journey. Connect the tools and knowledge your organisation already uses, so teams can move forward with shared context.",
    features: [
      "Connect your existing systems",
      "Bring teams around shared knowledge",
      "Start modular and grow from there",
    ],
    caption: "Keep everyone moving in the same direction",
    prompt: "Bring our collection context together for the team.",
    response: "Everyone starts on the same page.",
    detail: "Creative direction. Product knowledge. One shared context.",
    image: "/images/fashion-archive.jpg",
  },
];

export function Workflow() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = workflows[active];
  return (
    <div className="workflow">
      <div
        className="workflow-tabs"
        role="tablist"
        aria-label="Explore the Yoona workflow"
      >
        {workflows.map((step, i) => (
          <button
            key={step.name}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className={`workflow-tab ${i === active ? "active" : ""}`}
            role="tab"
            id={`workflow-tab-${i}`}
            aria-controls="workflow-panel"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(event) => {
              if (
                !["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)
              )
                return;
              event.preventDefault();
              const next =
                event.key === "Home"
                  ? 0
                  : event.key === "End"
                    ? 2
                    : (active + (event.key === "ArrowRight" ? 1 : 2)) % 3;
              setActive(next);
              tabRefs.current[next]?.focus();
            }}
          >
            <span className="tab-index">0{i + 1}</span>
            <Icon name={step.icon} />
            <span>{step.name}</span>
            <Icon name="arrow" />
          </button>
        ))}
      </div>
      <div
        className="workflow-panel"
        role="tabpanel"
        id="workflow-panel"
        aria-labelledby={`workflow-tab-${active}`}
        tabIndex={0}
      >
        <div className="workflow-copy" key={item.name}>
          <p className="eyebrow">{item.name.toUpperCase()} WITH YOONA</p>
          <h3>{item.subtitle}</h3>
          <p>{item.description}</p>
          <ul>
            {item.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            See the possibilities <Icon name="arrow" />
          </a>
        </div>
        <div className={`product-preview preview-${active}`}>
          <div className="product-window">
            <div className="product-toolbar">
              <span className="mini-wordmark">yoona</span>
              <span>
                <span className="tiny-dot" /> Your creative workspace
              </span>
              <Icon name="grid" />
            </div>
            <div className="product-body">
              <div className="product-title">
                <span>{item.caption}</span>
                <span className="concept-tag">ILLUSTRATIVE CONCEPT</span>
              </div>
              <div className="product-prompt">
                <span className="avatar">Y</span>
                <p>{item.prompt}</p>
              </div>
              <div className="product-answer">
                <Icon name="spark" />
                <div>
                  <strong>{item.response}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
              <div className="product-moodboard">
                <div className="product-photo">
                  <Image
                    src={item.image}
                    alt={`Fashion imagery illustrating the ${item.name.toLowerCase()} workflow`}
                    fill
                    sizes="(max-width: 700px) 45vw, 22vw"
                  />
                </div>
                <div className="product-detail">
                  <GarmentSketch />
                  <div className="product-palette">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="product-side-photo">
                  <Image
                    src="/images/garment-jacket.jpg"
                    alt="Jacket construction and material details"
                    fill
                    sizes="18vw"
                  />
                </div>
              </div>
              <div className="product-input">
                <span>Where shall we go next?</span>
                <span className="input-arrow">
                  <Icon name="arrow" />
                </span>
              </div>
            </div>
          </div>
          <span className="preview-footnote">
            YOUR CREATIVITY. A LITTLE MORE CONNECTED.
          </span>
        </div>
      </div>
      {active === 0 && <BuildFilm />}
    </div>
  );
}

const popularAgents = [
  {
    name: "Trend Forecaster Agent",
    focus: "Market & trend intelligence",
    description:
      "Researches markets, competitors, social activity, and consumer signals, turning emerging patterns into directions relevant to your brand.",
    analysis: [
      "Market & competitor research",
      "Social & consumer signals",
      "Emerging trends",
    ],
    outcome: "A clearer brief for upcoming products and collections.",
    image: "/images/agent-trend-forecaster.png",
    alt: "Yoona’s trend research screenshot showing a blouse concept, colour palette, materials, style, and feature analysis",
    example: "Trend research & product attributes",
  },
  {
    name: "Sales Confidence Agent",
    focus: "Product & assortment analysis",
    description:
      "Evaluates product, sales, trend, and market attributes to estimate each SKU’s sales potential. A Sales Confidence Score supports assortment and buying decisions.",
    analysis: [
      "Product & sales attributes",
      "Trend & market context",
      "SKU-level potential",
    ],
    outcome: "Prioritise likely winners before committing to scale.",
    image: "/images/agent-sales-confidence.png",
    alt: "Yoona platform example with a trend-fit confidence range, attribute radar, and analysis of materials, style, features, colour, and print",
    example: "Trend-fit & attribute analysis",
  },
  {
    name: "Product Optimizer Agent",
    focus: "Insight-led product refinement",
    description:
      "Uses insights from the Sales Confidence Agent to recommend product changes, helping teams refine new designs before taking them to market.",
    analysis: [
      "Product attributes",
      "Sales Confidence insights",
      "Design improvements",
    ],
    outcome: "Turn analysis into a more considered product direction.",
    image: "/images/agent-product-optimizer.png",
    alt: "Yoona’s published product example comparing an original and optimised blouse with a ranked gallery of design variations",
    example: "Original, optimised & ranked variants",
  },
];

export function PopularAgents() {
  const [active, setActive] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const agent = popularAgents[active];

  return (
    <section
      className="agents-section"
      id="agents"
      aria-labelledby="agents-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOONA’S MOST POPULAR AGENTS</p>
          <h2 id="agents-heading">
            Intelligence you can
            <br />
            <em>put to work.</em>
          </h2>
        </div>
        <p>
          Three agents, connected to help your teams
          <br className="desktop-break" /> research, assess, and improve.
        </p>
      </div>
      <div className="agents-layout">
        <div className="agents-sidebar">
          <div
            className="agent-tabs"
            role="tablist"
            aria-label="Explore Yoona’s popular agents"
            aria-orientation="vertical"
          >
            {popularAgents.map((item, index) => (
              <button
                key={item.name}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                className={`agent-tab ${active === index ? "active" : ""}`}
                id={`agent-tab-${index}`}
                role="tab"
                aria-selected={active === index}
                aria-controls="popular-agent-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (
                    !["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)
                  )
                    return;
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? popularAgents.length - 1
                        : (active +
                            (event.key === "ArrowDown"
                              ? 1
                              : popularAgents.length - 1)) %
                          popularAgents.length;
                  setActive(next);
                  tabRefs.current[next]?.focus();
                }}
              >
                <span className="agent-tab-index">0{index + 1}</span>
                <span className="agent-tab-label">
                  <strong>{item.name}</strong>
                  <small>{item.focus}</small>
                </span>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
          <a
            className="text-link"
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
          >
            Request demo <Icon name="arrow" />
          </a>
          <a
            className="agent-source"
            href="https://www.yoona.ai/"
            target="_blank"
            rel="noreferrer"
          >
            Explore on yoona.ai <Icon name="diagonal" />
          </a>
        </div>
        <div
          className="agent-panel"
          id="popular-agent-panel"
          role="tabpanel"
          aria-labelledby={`agent-tab-${active}`}
          tabIndex={0}
        >
          <a
            className="agent-example-link"
            href={agent.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${agent.example.toLowerCase()} screenshot at full size`}
          >
            <div className="agent-screenshot">
              <Image
                src={agent.image}
                alt={agent.alt}
                fill
                sizes="(max-width: 700px) 100vw, 60vw"
              />
            </div>
            <div className="agent-example-caption">
              <span>PLATFORM EXAMPLE · {agent.example}</span>
              <span>
                View full size <Icon name="diagonal" />
              </span>
            </div>
          </a>
          <div className="agent-details" key={agent.name}>
            <h3>{agent.name}</h3>
            <p>{agent.description}</p>
            <span className="agent-analysis-label">WHAT IT ANALYSES</span>
            <ul className="agent-analysis">
              {agent.analysis.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="agent-outcome">
              <Icon name="check" />
              <p>{agent.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    name: "Design & creative",
    title: "More space for your imagination.",
    description:
      "Less time searching for what you need. More time finding what’s next. Bring your brand knowledge and creative process into the same conversation.",
    tags: ["Inspiration", "Concept development", "Brand DNA"],
    image: "/images/editorial-street.jpg",
    alt: "A blue tailored coat styled on the streets of Milan",
    label: "MADE FOR THE VISIONARIES",
  },
  {
    name: "Product & merchandising",
    title: "See the whole collection story.",
    description:
      "Connect the creative perspective with product and commercial context. Give your team a clearer starting point for decisions across the collection.",
    tags: ["Product context", "Collection planning", "Connected knowledge"],
    image: "/images/fashion-archive.jpg",
    alt: "A carefully selected archive of garments",
    label: "MADE FOR THE CONNECTORS",
  },
  {
    name: "Brand & business",
    title: "Bring your next chapter into focus.",
    description:
      "Start with the use case that matters to your business. Connect the systems you already have, then build on that foundation as your organisation grows.",
    tags: ["Modular approach", "Shared context", "Connected teams"],
    image: "/images/creative-team.jpg",
    alt: "People exploring a fashion collection together",
    label: "MADE FOR THE FORWARD THINKERS",
  },
];

export function Audience() {
  const [active, setActive] = useState(0);
  const item = audiences[active];
  return (
    <div className="audience">
      <div className="audience-options" aria-label="Choose your team">
        {audiences.map((team, i) => (
          <button
            key={team.name}
            aria-pressed={active === i}
            className={active === i ? "active" : ""}
            onClick={() => setActive(i)}
          >
            {team.name}
            <Icon name="diagonal" />
          </button>
        ))}
      </div>
      <div className="audience-panel" aria-live="polite">
        <div className="audience-image">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
          />
          <span>{item.label}</span>
        </div>
        <div className="audience-copy" key={item.name}>
          <span className="audience-index">0{active + 1} / 03</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="audience-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="text-link"
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
          >
            Find your starting point <Icon />
          </a>
        </div>
      </div>
    </div>
  );
}
