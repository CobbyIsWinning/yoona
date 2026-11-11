"use client";

import { pageWidth, eyebrow, textLink, sectionHeading } from "./styles";
import { YoonaLogo } from "./brand";

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
  className = "size-5",
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
      className={`icon shrink-0 ${className}`}
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
      <a
        className="skip-link p-3 fixed z-100 top-2.5 left-2.5 transform-[translateY(-150%)] bg-accent focus:transform-[translateY(0)]"
        href="#main"
      >
        Skip to content
      </a>
      <header className="header sticky top-0 z-40 bg-[#ffffffed] backdrop-blur-[20px] border-b border-b-line">
        <div
          className={`${pageWidth} header-inner h-22 flex items-center justify-between gap-10 laptop:h-19.5 laptop:gap-6.25 tablet:h-18 phone:h-17.5 phone:gap-3`}
        >
          <a
            className="wordmark block shrink-0"
            href="#"
            aria-label="Yoona home"
            onClick={() => setOpen(false)}
          >
            <YoonaLogo
              className="w-44 tablet:w-40 phone:w-[clamp(100px,28vw,156px)]"
              preload
            />
          </a>
          <nav
            id="main-navigation"
            className={`main-nav flex gap-8 ml-15 laptop:gap-5.5 laptop:ml-0 tablet:gap-4.5 phone:px-6.25 phone:hidden phone:absolute phone:left-0 phone:right-0 phone:top-17.5 phone:bg-background phone:pt-6.25 phone:pb-7.5 phone:border-b phone:border-b-line phone:shadow-[0_8px_16px_#252a1a08] phone:[&.is-open]:flex phone:[&.is-open]:flex-col phone:[&.is-open]:gap-5.75 ${open ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a
              className="text-[12px] [transition:color_0.2s] tablet:text-[10px] phone:text-[15px] hover:text-[#738b36]"
              href="#platform"
              onClick={() => setOpen(false)}
            >
              The platform
            </a>
            <a
              className="text-[12px] [transition:color_0.2s] tablet:text-[10px] phone:text-[15px] hover:text-[#738b36]"
              href="#teams"
              onClick={() => setOpen(false)}
            >
              For your team
            </a>
            <a
              className="text-[12px] [transition:color_0.2s] tablet:text-[10px] phone:text-[15px] hover:text-[#738b36]"
              href="#about"
              onClick={() => setOpen(false)}
            >
              Our story
            </a>
            <a
              className="text-[12px] [transition:color_0.2s] tablet:text-[10px] phone:text-[15px] hover:text-[#738b36]"
              href="#resources"
              onClick={() => setOpen(false)}
            >
              Resources
            </a>
            <a
              className="mobile-login text-[12px] [transition:color_0.2s] hidden tablet:text-[10px] phone:text-[12px] phone:flex phone:gap-2 phone:items-center phone:text-[#7b856a] hover:text-[#738b36]"
              href="https://design.yoona.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Log in <Icon className="size-5 phone:size-3.5" name="diagonal" />
            </a>
          </nav>
          <div className="header-actions flex items-center gap-7 laptop:gap-5 tablet:gap-3">
            <a
              className="login-link flex items-center gap-1.75 text-[12px] tablet:hidden"
              href="https://design.yoona.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Log in <Icon className="size-3.75" name="diagonal" />
            </a>
            <a
              className="button button-dark nav-demo whitespace-nowrap px-4.5 py-3.25 inline-flex items-center justify-center gap-6.5 rounded-[5px] text-[13px] [transition:background_0.2s,transform_0.2s] bg-foreground text-white tablet:px-3.5 tablet:py-2.75 tablet:gap-4 tablet:text-[11px] phone:px-3.25 phone:py-2.5 phone:text-[10px] hover:transform-[translateY(-2px)] hover:bg-[#414141]"
              href="https://www.yoona.ai/demo"
              target="_blank"
              rel="noreferrer"
            >
              Request demo <Icon className="size-4.25 phone:size-3.75" />
            </a>
            <button
              className="menu-toggle hidden phone:p-1 phone:grid phone:place-items-center phone:bg-transparent"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="main-navigation"
              onClick={() => setOpen(!open)}
            >
              <Icon
                className="size-5 phone:size-5.5"
                name={open ? "close" : "menu"}
              />
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
      className={`${pageWidth} fashion-gallery grid grid-cols-[repeat(4,minmax(0,1fr))] gap-4 mt-11.5 phone:grid-cols-[repeat(2,minmax(0,1fr))] phone:gap-3 phone:mt-7`}
      role="group"
      aria-label="Fashion inspiration"
    >
      {visibleImages.map((imageIndex, index) => {
        const item = looks[imageIndex];
        return (
          <figure
            key={index}
            data-image-index={imageIndex}
            className={`m-0 min-w-0 relative z-0 [&.is-focused]:z-1 ${focusedImage === index ? "is-focused" : ""}`}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") focusImage(index);
            }}
            onFocusCapture={() => focusImage(index)}
          >
            <button
              className="fashion-gallery-select p-0 block w-full border-0 rounded-[5px] bg-transparent"
              aria-label={`Focus fashion image ${index + 1}`}
              aria-pressed={focusedImage === index}
              onClick={() => focusImage(index)}
            >
              <div
                className={`fashion-gallery-photo relative h-[clamp(260px,28vw,380px)] overflow-hidden rounded-[5px] [filter:blur(2.2px)] opacity-50 transform-[scale(0.94)] [transition:filter_0.3s_ease,opacity_0.3s_ease,transform_0.3s_ease,box-shadow_0.3s_ease] phone:h-60 in-[figure.is-focused]:filter-none in-[figure.is-focused]:opacity-100 in-[figure.is-focused]:transform-[scale(1.035)] in-[figure.is-focused]:shadow-[0_16px_35px_#24242420] ${item.flatlay ? "is-flatlay" : ""}`}
                style={{
                  backgroundColor:
                    item.backdrop || (item.flatlay ? "#e9e1ce" : "#f5f5f5"),
                }}
              >
                <Image
                  className="object-cover object-[50%_32%] animate-[fashion-photo-reveal_0.65s_ease] in-[.fashion-gallery-photo.is-flatlay]:object-contain in-[.fashion-gallery-photo.is-flatlay]:object-[center]"
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
            <figcaption className="fashion-gallery-caption flex items-center justify-between gap-2 min-h-8 text-[11px] text-[#59614f] mt-2">
              <span>
                {item.source ? "Outfit inspiration" : "A new perspective"}
              </span>
              {item.source && (
                <a
                  className="grid place-items-center size-7.5"
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View original inspiration for image ${index + 1}`}
                >
                  <Icon className="size-3.25" name="diagonal" />
                </a>
              )}
            </figcaption>
          </figure>
        );
      })}
      <button
        className="gallery-rotation-toggle px-2.5 py-1.5 col-span-full justify-self-end inline-flex items-center gap-1.75 border border-line rounded-[4px] bg-white text-[#59614f] text-[11px] disabled:opacity-60"
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
        <Icon
          className="size-3.25"
          name={paused || reducedMotion ? "play" : "pause"}
        />
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
      className="scroll-belt mt-16 bg-white border-t border-t-line border-b border-b-line [transition:background-color_0.6s_ease] laptop:mt-12.5 phone:mt-8.5"
      id="possibilities"
      aria-labelledby="belt-heading"
      data-colourway={active}
      style={{ backgroundColor: colourways[active].background }}
    >
      <div
        ref={stageRef}
        className="belt-stage sticky top-22 pt-10.5 pb-14.5 laptop:top-19.5 tablet:top-18 phone:top-17.5 phone:pt-7.5 phone:pb-11 short-phone:pt-5.5"
      >
        <div
          className={`${pageWidth} belt-layout h-full grid grid-cols-[1fr_1.15fr] items-center gap-15 laptop:gap-8.75 tablet:grid-cols-[1fr_1fr] tablet:gap-5.5 phone:grid-cols-[1fr] phone:items-start phone:gap-3.25 phone:grid-rows-[auto_1fr]`}
        >
          <div className="belt-copy">
            <p
              className={`${eyebrow} gap-2.25 text-[8px] tracking-[1.7px] mb-6.5 tablet:text-[6px] tablet:tracking-[1px] tablet:mb-5 phone:text-[7px] phone:mb-4 short-phone:text-[6px] short-phone:mb-3`}
            >
              <span className="status-dot inline-block size-1.75 bg-sage rounded-full shrink-0" />{" "}
              ONE IDEA. ENDLESS DIRECTIONS.
            </p>
            <h2
              className="text-[clamp(38px,4.2vw,61px)] leading-[1.08] tracking-[-2.5px] font-normal laptop:text-[44px] tablet:text-[36px] tablet:tracking-[-1.8px] short-phone:text-[31px]"
              id="belt-heading"
            >
              Same instinct.
              <br />
              New <em>possibilities.</em>
            </h2>
            <p className="max-w-81.25 text-[15px] leading-[1.8] text-copy mt-5.75 tablet:text-[14px] tablet:mt-4.5 phone:max-w-77.5 phone:mt-3.75 short-phone:mt-2.75">
              A different colour. A fresh point of view. Explore what your next
              collection could become.
            </p>
            <div
              className="belt-swatches flex gap-2 mt-6.5 tablet:gap-0.75 tablet:mt-5 phone:gap-1.5 phone:mt-4 short-phone:mt-2.75"
              aria-label="Choose a jacket colourway"
            >
              {colourways.map((colourway, index) => (
                <button
                  key={colourway.name}
                  onClick={() => selectColourway(index)}
                  aria-pressed={active === index}
                  className={`px-2.75 py-2.25 flex items-center gap-2 text-[10px] bg-transparent border border-transparent rounded-[30px] [transition:border-color_0.2s] tablet:px-2 tablet:py-1.75 tablet:gap-1.25 tablet:text-[8px] phone:px-2.5 phone:py-2 phone:gap-1.75 phone:text-[9px] [&.active]:border-[#9ca18e] ${active === index ? "active" : ""}`}
                >
                  <span
                    className="size-3.25 rounded-full border border-[#4b514a18] tablet:size-2.75"
                    style={{ backgroundColor: colourway.colour }}
                  />
                  {colourway.name}
                </button>
              ))}
            </div>
            <span className="belt-scroll-cue inline-flex items-center gap-3.75 mt-8 text-[7px] tracking-[1.5px] text-[#747d66] phone:gap-2.5 phone:mt-4 phone:text-[6px] short-phone:mt-2.75">
              {reducedMotion
                ? "CHOOSE A COLOUR TO EXPLORE"
                : "SCROLL TO REIMAGINE"}
              <Icon className="size-3.5 phone:size-3" name="down" />
            </span>
          </div>
          <div className="belt-product w-full max-w-122.5 relative justify-self-center laptop:max-w-107.5 phone:w-[min(78vw,300px)] phone:self-center">
            <span className="belt-product-label absolute top-0 left-6.25 text-[7px] tracking-[1.4px] text-[#7d856f] tablet:left-3 tablet:text-[6px] phone:text-[5px]">
              THE COLOUR STUDY / 01
            </span>
            <div
              className="belt-garment w-full aspect-[1] relative overflow-hidden"
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
            <div
              className="belt-product-caption absolute bottom-0 left-6.25 right-6.25 flex justify-between items-center gap-3.75 text-[10px] text-[#6e7565] tablet:left-3 tablet:right-3 tablet:text-[8px]"
              aria-live="polite"
            >
              <span>{colourways[active].caption}</span>
              <span className="text-[8px] font-mono tablet:text-[7px]">
                0{active + 1} / 03
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${pageWidth} belt-footer absolute bottom-5.5 left-0 right-0 flex justify-between items-center gap-6.25 text-[7px] tracking-[1.1px] text-[#747d66] tablet:text-[6px] phone:bottom-4.25 phone:gap-3.75 phone:text-[5px] phone:tracking-[0.6px]`}
        >
          <span>AI-GENERATED GARMENT STUDY</span>
          <div
            className="belt-progress flex-1 max-w-52.5 h-0.5 bg-[#737d5c20] overflow-hidden tablet:max-w-30 phone:max-w-13.75"
            aria-hidden="true"
          >
            <span className="block h-full bg-[#737d5c]" />
          </div>
          <a
            className="inline-flex items-center gap-2 tracking-[0] text-[9px] tablet:text-[8px] phone:gap-1 phone:text-[7px] hover:underline"
            href="https://www.pinterest.com/pin/1093671090781202495/"
            target="_blank"
            rel="noreferrer"
          >
            Motion inspiration{" "}
            <Icon className="size-3 phone:size-2.5" name="diagonal" />
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
    <figure
      className="build-film mx-0 grid grid-cols-[0.65fr_1.35fr] gap-12 items-center mt-14.5 mb-0 pt-11 border-t border-t-line laptop:gap-8 tablet:grid-cols-[0.8fr_1.2fr] tablet:gap-6.5 phone:grid-cols-[1fr] phone:gap-6.25 phone:mt-9 phone:pt-7.25"
      aria-labelledby="build-film-heading"
    >
      <figcaption className="build-film-copy">
        <p
          className={`${eyebrow} gap-2.25 text-[7px] tracking-[1.3px] mb-4.75 tablet:text-[6px] tablet:tracking-[0.8px] phone:text-[7px] phone:mb-3.75`}
        >
          THE CREATIVE PROCESS, IN MOTION
        </p>
        <h3
          className="text-[29px] font-normal leading-[1.2] tracking-[-1.1px] laptop:text-[26px] tablet:text-[24px] phone:text-[28px]"
          id="build-film-heading"
        >
          From a little inspiration.
          <br />
          To <em>something real.</em>
        </h3>
        <p className="text-[15px] leading-[1.8] text-copy max-w-75 mt-4.25 tablet:text-[14px] phone:max-w-77.5 phone:mt-3.5">
          A look behind the scenes of a fashion shoot. The people, the details,
          and the craft behind a collection.
        </p>
        <a
          className={`${textLink} gap-7 text-[10px] mt-3.75 phone:mt-2.5`}
          href="https://www.pinterest.com/pin/1001839879579990109/"
          target="_blank"
          rel="noreferrer"
        >
          Watch the original <Icon className="size-5" name="diagonal" />
        </a>
        <span className="build-film-credit block text-[8px] text-[#7e8573] mt-4.75 phone:text-[7px] phone:mt-3.5">
          HTHR · Lindsey Schumacher Media
        </span>
      </figcaption>
      <div className="build-film-player min-w-0">
        <video
          className="block w-full aspect-[16/9] bg-[#dad7ce] object-contain rounded-[4px]"
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
        <div className="build-film-status flex justify-between gap-3.5 mt-3 text-[6px] tracking-[1px] text-[#7e8573] tablet:text-[5px] tablet:tracking-[0.5px] phone:mt-2.5">
          <span className="flex items-center gap-1.5">
            <span
              className={`status-dot inline-block size-1 bg-[#a2a795] rounded-full shrink-0 [&.is-playing]:bg-[#748c43] ${playing ? "is-playing" : ""}`}
            />
            {failed
              ? "WATCH VIA THE ORIGINAL LINK"
              : playing
                ? "THE CREATIVE PROCESS / PLAYING"
                : "THE CREATIVE PROCESS / PRESS PLAY"}
          </span>
          <span className="tablet:hidden phone:block">
            SOUND OFF BY DEFAULT
          </span>
        </div>
      </div>
    </figure>
  );
}

function GarmentSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`garment-sketch ${className}`}
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
        className="workflow-tabs grid grid-cols-[repeat(3,1fr)] border-b border-b-line gap-8.5 tablet:gap-5 phone:gap-3.75"
        role="tablist"
        aria-label="Explore the Yoona workflow"
      >
        {workflows.map((step, i) => (
          <button
            key={step.name}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className={`workflow-tab px-0 py-5.5 bg-transparent flex items-center gap-3.25 relative text-left text-[#717568] tablet:py-4.5 tablet:gap-2.5 phone:py-3.75 phone:gap-1.75 [&.active]:text-foreground after:content-[""] after:absolute after:bottom-[-1px] after:h-0.5 after:left-0 after:right-0 after:bg-transparent after:[transition:background_0.2s] [&.active]:after:bg-[#798c46] ${i === active ? "active" : ""}`}
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
            <span className="tab-index text-[9px] mr-3.5 font-mono tablet:text-[8px] tablet:mr-0.5 phone:text-[6px] phone:mr-0">
              0{i + 1}
            </span>
            <Icon
              className="size-5 tablet:size-4.25 phone:size-3.25"
              name={step.icon}
            />
            <span className="text-[21px] tracking-[-0.6px] tablet:text-[19px] phone:text-[17px]">
              {step.name}
            </span>
            <Icon
              className="size-4.5 ml-auto transform-[rotate(-45deg)] phone:hidden in-[.workflow-tab.active]:transform-[none]"
              name="arrow"
            />
          </button>
        ))}
      </div>
      <div
        className="workflow-panel grid grid-cols-[0.85fr_1.3fr] gap-16.25 pt-10.5 items-center laptop:grid-cols-[0.9fr_1.1fr] laptop:gap-8.75 tablet:gap-6 tablet:pt-7.5 phone:grid-cols-[1fr] phone:gap-7.5 phone:pt-7"
        role="tabpanel"
        id="workflow-panel"
        aria-labelledby={`workflow-tab-${active}`}
        tabIndex={0}
      >
        <div
          className="workflow-copy animate-[fade-in_0.4s_ease]"
          key={item.name}
        >
          <p
            className={`${eyebrow} gap-2.25 text-[9px] tracking-[1.7px] text-[#7b855e] mb-4.5 phone:text-[7px] phone:mb-3.25`}
          >
            {item.name.toUpperCase()} WITH YOONA
          </p>
          <h3 className="text-[31px] font-normal leading-[1.2] tracking-[-1.2px] max-w-87.5 mb-4.5 tablet:text-[26px] phone:text-[28px] phone:max-w-75">
            {item.subtitle}
          </h3>
          <p className="text-copy text-[15px] leading-[1.8] max-w-87.5 tablet:text-[14px] phone:max-w-full">
            {item.description}
          </p>
          <ul className="mx-0 my-6.5 p-0 list-none tablet:my-4.75 phone:my-5.25">
            {item.features.map((feature) => (
              <li
                className="my-3.25 flex items-center gap-2.75 text-[11px] tablet:gap-2 tablet:text-[9px] phone:text-[10px]"
                key={feature}
              >
                <Icon className="size-3.25 text-[#718d40]" name="check" />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
            className={`${textLink} gap-7 text-[11px]`}
          >
            See the possibilities <Icon className="size-5" name="arrow" />
          </a>
        </div>
        <div className="product-preview px-8 bg-surface rounded-[5px] pt-8.75 pb-4.5 overflow-hidden [transition:background_0.4s] laptop:px-4.5 laptop:pt-6.25 laptop:pb-3.75 tablet:px-3.25 tablet:pt-5 tablet:pb-3.25 phone:px-5 phone:pt-6 phone:pb-4">
          <div className="product-window bg-white border border-[#d9dccf] rounded-[5px] shadow-[0_8px_30px_#343a2110] min-w-0">
            <div className="product-toolbar px-3.75 h-9.75 border-b border-b-[#e8e9e2] flex items-center justify-between tablet:px-2.5 phone:px-3.25 phone:h-9.5">
              <YoonaLogo className="mini-wordmark w-17 phone:w-14" />
              <span className="text-[7px] text-[#8e9285] flex gap-1.25 items-center tablet:text-[5px] phone:text-[6px]">
                <span className="tiny-dot inline-block size-1.25 rounded-full bg-[#9cae70]" />{" "}
                Your creative workspace
              </span>
              <Icon className="size-3 text-[#8d9381]" name="grid" />
            </div>
            <div className="product-body px-5.5 pt-5.5 pb-3.25 laptop:px-3.25 laptop:pt-4.5 laptop:pb-2.75 tablet:px-2.5 tablet:pt-4 tablet:pb-2.5 phone:px-3.75 phone:pt-4.75 phone:pb-3">
              <div className="product-title flex gap-3.75 justify-between items-center text-[12px] tracking-[-0.3px] mb-5.5 laptop:gap-1.75 laptop:text-[10px] tablet:text-[9px] tablet:mb-4.25 tablet:flex-wrap phone:text-[10px] phone:flex-nowrap">
                <span>{item.caption}</span>
                <span className="concept-tag p-1 text-[7px] tracking-[0.6px] whitespace-nowrap text-[#989e8a] border border-[#e4e7db] laptop:text-[4px]">
                  ILLUSTRATIVE CONCEPT
                </span>
              </div>
              <div className="product-prompt flex items-center gap-2.25 mb-5 tablet:gap-1.5 tablet:mb-3.5">
                <span className="avatar grid place-items-center bg-[#f2f2f2] rounded-full size-5.25 text-[8px]">
                  Y
                </span>
                <p className="text-[8px] text-[#85897a] tablet:text-[6px] phone:text-[7px]">
                  {item.prompt}
                </p>
              </div>
              <div className="product-answer flex gap-2 items-start mb-3.75 tablet:gap-1.5">
                <Icon className="size-3.75 text-[#7e8e58]" name="spark" />
                <div>
                  <strong className="text-[9px] font-medium tablet:text-[7px] phone:text-[8px]">
                    {item.response}
                  </strong>
                  <p className="text-[7px] text-[#8c9181] leading-[1.6] mt-1 tablet:text-[6px]">
                    {item.detail}
                  </p>
                </div>
              </div>
              <div className="product-moodboard grid grid-cols-[1.25fr_1fr_0.65fr] gap-1.75 h-43.25 pl-5.75 mb-4.25 laptop:h-36.25 tablet:h-30 tablet:pl-0 phone:h-37.5 phone:pl-5 phone:mt-4">
                <div className="product-photo relative overflow-hidden rounded-[2px]">
                  <Image
                    className="[filter:saturate(0.55)] object-[50%_25%]"
                    src={item.image}
                    alt={`Fashion imagery illustrating the ${item.name.toLowerCase()} workflow`}
                    fill
                    sizes="(max-width: 700px) 45vw, 22vw"
                  />
                </div>
                <div className="product-detail p-2 bg-surface flex flex-col items-center overflow-hidden rounded-[2px] tablet:p-1.25">
                  <GarmentSketch className="w-full h-32.5 min-h-0 text-[#6c715e] laptop:h-25.75 tablet:h-21 phone:h-28.25" />
                  <div className="product-palette flex gap-0.75 w-[80%] mt-1.75">
                    <i className="h-3.75 flex-1 bg-[#9ba480] tablet:h-2.75 phone:h-3.25" />
                    <i className="h-3.75 flex-1 bg-[#d1b494] tablet:h-2.75 phone:h-3.25" />
                    <i className="h-3.75 flex-1 bg-[#d9d8cd] tablet:h-2.75 phone:h-3.25" />
                    <i className="h-3.75 flex-1 bg-[#5b675a] tablet:h-2.75 phone:h-3.25" />
                  </div>
                </div>
                <div className="product-side-photo relative overflow-hidden rounded-[2px]">
                  <Image
                    className="[filter:saturate(0.55)]"
                    src="/images/garment-jacket.jpg"
                    alt="Jacket construction and material details"
                    fill
                    sizes="18vw"
                  />
                </div>
              </div>
              <div className="product-input py-1.5 h-8.5 border border-[#e3e6da] rounded-[4px] pr-1.75 pl-2.5 flex items-center justify-between text-[#a0a593] text-[8px] phone:h-7.75 phone:text-[7px]">
                <span>Where shall we go next?</span>
                <span className="input-arrow size-5.25 grid place-items-center bg-[#dbe7bc] rounded-[3px]">
                  <Icon className="size-3 text-[#788c4b]" name="arrow" />
                </span>
              </div>
            </div>
          </div>
          <span className="preview-footnote block text-center text-[6px] tracking-[1.4px] mt-3.75 text-[#8d957a] tablet:text-[4px] tablet:tracking-[1px] phone:text-[5px] phone:tracking-[0.9px]">
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
      className="agents-section mt-22 pt-16.5 border-t border-t-line tablet:mt-16.25 tablet:pt-11.25 phone:mt-11.25 phone:pt-8.25"
      id="agents"
      aria-labelledby="agents-heading"
    >
      <div className={`${sectionHeading} mb-9.5 phone:mb-6`}>
        <div>
          <p
            className={`${eyebrow} gap-2.25 text-[10px] tracking-[1.7px] mb-4.75 tablet:text-[8px] tablet:mb-4 phone:text-[7px] phone:tracking-[1.3px]`}
          >
            YOONA’S MOST POPULAR AGENTS
          </p>
          <h2
            className="text-[clamp(36px,3.7vw,53px)] leading-[1.08] tracking-[-2.5px] font-normal phone:text-[37px] phone:tracking-[-1.8px]"
            id="agents-heading"
          >
            Intelligence you can
            <br />
            <em>put to work.</em>
          </h2>
        </div>
        <p className="text-[15px] text-copy leading-[1.8] mb-1.25 tablet:text-[14px] tablet:max-w-65 phone:max-w-82.5">
          Three agents, connected to help your teams
          <br className="desktop-break tablet:hidden" /> research, assess, and
          improve.
        </p>
      </div>
      <div className="agents-layout grid grid-cols-[0.85fr_1.65fr] gap-12 items-start laptop:grid-cols-[0.95fr_1.55fr] laptop:gap-8 tablet:grid-cols-[0.95fr_1.5fr] tablet:gap-5.75 phone:grid-cols-[1fr] phone:gap-7.25">
        <div className="agents-sidebar min-w-0">
          <div
            className="agent-tabs flex flex-col gap-2 phone:gap-1.5"
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
                className={`agent-tab px-4 py-6 flex items-center gap-3.75 w-full bg-transparent border border-t-transparent border-r-transparent border-b-line border-l-transparent rounded-[3px] text-left [transition:background_0.2s] laptop:px-3 laptop:py-5.25 laptop:gap-2.75 tablet:px-2.5 tablet:py-4.5 tablet:gap-2.25 phone:px-3.5 phone:py-4 phone:gap-3.25 [&.active]:bg-white [&.active]:border-[#d4d4d4] [&.active]:shadow-[inset_3px_0_0_var(--color-foreground)] ${active === index ? "active" : ""}`}
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
                <span className="agent-tab-index font-mono text-[8px] text-[#879176] tablet:text-[7px]">
                  0{index + 1}
                </span>
                <span className="agent-tab-label flex flex-col gap-2 flex-1 min-w-0 phone:gap-1">
                  <strong className="text-[15px] font-normal tracking-[-0.35px] laptop:text-[13px] tablet:text-[12px] tablet:leading-[1.4] phone:text-[14px]">
                    {item.name}
                  </strong>
                  <small className="text-[9px] text-[#7c8471] laptop:text-[8px] tablet:leading-[1.6] phone:text-[9px]">
                    {item.focus}
                  </small>
                </span>
                <Icon
                  className="size-3.75 text-[#848d75] [transition:transform_0.2s] transform-[rotate(-45deg)] laptop:size-3.25 tablet:size-3 in-[.agent-tab.active]:transform-[rotate(0)] in-[.agent-tab.active]:text-[#4f6039]"
                  name="arrow"
                />
              </button>
            ))}
          </div>
          <a
            className={`${textLink} gap-7 text-[11px] mt-6 phone:text-[10px] phone:mt-4.75`}
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
          >
            Request demo <Icon className="size-5" name="arrow" />
          </a>
          <a
            className="agent-source flex items-center gap-1.75 w-fit mt-5 text-[9px] text-[#7b8370] phone:inline-flex phone:mt-0 phone:text-[8px] phone:ml-5.5 hover:underline"
            href="https://www.yoona.ai/"
            target="_blank"
            rel="noreferrer"
          >
            Explore on yoona.ai <Icon className="size-3" name="diagonal" />
          </a>
        </div>
        <div
          className="agent-panel min-w-0"
          id="popular-agent-panel"
          role="tabpanel"
          aria-labelledby={`agent-tab-${active}`}
          tabIndex={0}
        >
          <a
            className="agent-example-link block"
            href={agent.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${agent.example.toLowerCase()} screenshot at full size`}
          >
            <div className="agent-screenshot relative aspect-[16/10] border border-[#e0e2d8] rounded-[4px] bg-white overflow-hidden">
              <Image
                className="p-3.25 object-contain tablet:p-2 phone:p-1.75"
                src={agent.image}
                alt={agent.alt}
                fill
                sizes="(max-width: 700px) 100vw, 60vw"
              />
            </div>
            <div className="agent-example-caption flex justify-between items-start gap-3.75 mt-3 text-[#777e6e]">
              <span className="flex-1 min-w-0 text-[7px] leading-[1.7] tracking-[0.65px] phone:text-[6px] phone:tracking-[0.3px]">
                PLATFORM EXAMPLE · {agent.example}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[8px] whitespace-nowrap phone:text-[7px] in-[.agent-example-link:hover]:underline">
                View full size <Icon className="size-2.75" name="diagonal" />
              </span>
            </div>
          </a>
          <div
            className="agent-details mt-7 animate-[fade-in_0.3s_ease] phone:mt-6"
            key={agent.name}
          >
            <h3 className="text-[27px] font-normal tracking-[-1px] leading-[1.25] tablet:text-[24px] phone:text-[26px]">
              {agent.name}
            </h3>
            <p className="max-w-170 text-[15px] leading-[1.8] text-copy mt-3.5 tablet:text-[14px]">
              {agent.description}
            </p>
            <span className="agent-analysis-label block mt-6 text-[7px] tracking-[1.3px] text-[#7b846c] phone:mt-5.25">
              WHAT IT ANALYSES
            </span>
            <ul className="agent-analysis mx-0 p-0 flex flex-wrap gap-1.75 list-none mt-2.75 mb-0">
              {agent.analysis.map((item) => (
                <li
                  className="px-2.5 py-1.75 border border-[#dfe4d4] rounded-[3px] text-[9px] text-[#6d775d] bg-white tablet:px-2 tablet:py-1.5 tablet:text-[8px]"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="agent-outcome py-0.75 flex items-start gap-2.5 mt-5.5 border-l-[2px] border-l-[#a0b17f] pr-0 pl-3.25 phone:mt-4.75">
              <Icon className="size-3.25 text-[#7f9460] mt-0.5" name="check" />
              <p className="text-[11px] leading-[1.75] text-[#58644a] tablet:text-[10px] phone:text-[11px]">
                {agent.outcome}
              </p>
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
      <div
        className="audience-options flex gap-2.5 border-b border-b-[#d8dccc] pb-4.5 mb-8.75 phone:gap-1.75 phone:pb-4 phone:mb-5.5 phone:flex-wrap"
        aria-label="Choose your team"
      >
        {audiences.map((team, i) => (
          <button
            key={team.name}
            aria-pressed={active === i}
            className={`px-4.75 py-3.25 flex items-center gap-7.5 rounded-[3px] border border-[#d4d8c8] bg-transparent text-[11px] [transition:background_0.2s] tablet:px-3 tablet:py-2.75 tablet:gap-3.75 tablet:text-[9px] phone:gap-3 phone:grow phone:last:grow-0 phone:justify-between [&.active]:bg-foreground [&.active]:text-white [&.active]:border-foreground ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {team.name}
            <Icon className="size-3.5 phone:size-3" name="diagonal" />
          </button>
        ))}
      </div>
      <div
        className="audience-panel grid grid-cols-[1fr_1fr] gap-21.25 items-center laptop:gap-11.25 tablet:gap-8.75 phone:grid-cols-[1fr] phone:gap-6.75"
        aria-live="polite"
      >
        <div className="audience-image relative h-91.25 rounded-[4px] overflow-hidden tablet:h-82.5 phone:h-73.75">
          <Image
            className="object-[50%_28%] [filter:saturate(0.6)]"
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
          />
          <span className="absolute bottom-5 left-5.5 text-white text-[8px] tracking-[1.4px] text-shadow-[0_1px_6px_#0009]">
            {item.label}
          </span>
        </div>
        <div
          className="audience-copy max-w-100 animate-[fade-in_0.35s] phone:max-w-full"
          key={item.name}
        >
          <span className="audience-index text-[9px] text-[#7f8771] font-mono phone:text-[8px]">
            0{active + 1} / 03
          </span>
          <h3 className="text-[37px] leading-[1.15] tracking-[-1.5px] font-normal mt-6.25 mb-4.5 laptop:text-[33px] tablet:text-[29px] phone:my-3.75 phone:text-[32px] phone:max-w-77.5">
            {item.title}
          </h3>
          <p className="text-[15px] leading-[1.8] text-copy tablet:text-[14px]">
            {item.description}
          </p>
          <div className="audience-tags flex flex-wrap gap-1.75 mt-5.75 mb-6.25 tablet:my-4.5 phone:my-4.75">
            {item.tags.map((tag) => (
              <span
                className="px-2.5 py-1.5 border border-[#d1d7c4] rounded-[30px] text-[8px] text-[#737c61] tablet:px-2 tablet:py-1.25 tablet:text-[7px] phone:text-[8px]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            className={`${textLink} gap-7 text-[11px]`}
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
          >
            Find your starting point <Icon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
