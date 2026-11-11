import {
  pageWidth,
  eyebrow,
  textLink,
  sectionSpacing,
  sectionHeading,
  sectionTitle,
} from "./components/styles";
import Image from "next/image";
import { YoonaLogo } from "./components/brand";
import {
  Audience,
  FashionCollage,
  Header,
  Icon,
  PopularAgents,
  ScrollBelt,
  Workflow,
} from "./components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section
          className="hero pt-16.5 overflow-clip laptop:pt-13.75 tablet:pt-11.25 phone:pt-9.5 wide:pt-21.25"
          aria-labelledby="hero-heading"
        >
          <div
            className={`${pageWidth} hero-intro flex justify-between items-end gap-8.75 laptop:gap-6 tablet:items-start tablet:gap-5.75 tablet:flex-col`}
          >
            <div>
              <p
                className={`${eyebrow} gap-2.25 text-[10px] tracking-[1.7px] mb-6 tablet:text-[8px] tablet:mb-5.25 phone:gap-1.75 phone:text-[7px] phone:tracking-[1.2px] phone:mb-4.75`}
              >
                <span className="status-dot inline-block size-1.75 bg-sage rounded-full shrink-0" />{" "}
                INTELLIGENCE, TAILORED TO FASHION
              </p>
              <h1
                className="text-[clamp(50px,6.05vw,94px)] leading-[1.06] tracking-[-5.2px] font-normal laptop:text-[6.1vw] laptop:tracking-[-3.7px] tablet:text-[8vw] tablet:tracking-[-3.5px] phone:text-[clamp(33px,8.8vw,52px)] phone:leading-[1.1] phone:tracking-[-2.1px]"
                id="hero-heading"
              >
                Fashion moves fast.
                <br />
                Think one step{" "}
                <em className="tracking-[-5.5px] tablet:tracking-[-3.5px] phone:tracking-[-2.5px]">
                  ahead.
                </em>
              </h1>
            </div>
            <div className="hero-aside max-w-70 pb-1.25 shrink-0 laptop:max-w-60 tablet:max-w-full tablet:flex tablet:items-center tablet:justify-between tablet:gap-8.75 tablet:w-full phone:max-w-82.5 phone:block">
              <p className="text-[16px] leading-[1.8] text-[#51564e] mb-3.5 laptop:text-[14px] tablet:m-0 tablet:max-w-90 phone:max-w-75">
                From first inspiration to the next big decision. Meet the AI
                agents connecting your creativity, data, and teams.
              </p>
              <a
                className={`${textLink} gap-4.5 text-[13px] laptop:gap-2.5 laptop:text-[12px] tablet:gap-3.75 tablet:whitespace-nowrap phone:gap-5.75 phone:mt-2.5`}
                href="#platform"
              >
                Discover your advantage <Icon className="size-5" name="arrow" />
              </a>
            </div>
          </div>
          <FashionCollage />
          <div
            className={`${pageWidth} hero-caption pt-5.75 pb-8.75 flex items-center justify-between gap-5 tablet:pt-6.25 phone:pt-5.75 phone:pb-6.25 phone:items-end phone:gap-3 wide:pt-7.25 wide:pb-10`}
          >
            <p className="flex items-center gap-2.5 text-[12px] text-[#60665b] laptop:text-[11px] tablet:max-w-72.5 phone:gap-2 phone:max-w-57.5 phone:leading-[1.7]">
              <span className="small-cross text-[19px] text-[#606b49] phone:text-[22px]">
                ✳
              </span>{" "}
              Human creativity. Connected intelligence. Endless possibilities.
            </p>
            <a
              href="#platform"
              className="scroll-link flex items-center gap-3.75 text-[8px] tracking-[1.5px] tablet:gap-2 tablet:text-[7px] phone:gap-0 phone:text-[0px]"
            >
              A NEW WAY FORWARD{" "}
              <Icon className="size-3.75 phone:size-5.5" name="down" />
            </a>
          </div>
        </section>

        <section
          className={`${pageWidth} connection-strip py-7.5 border-t border-t-line border-b border-b-line flex items-center justify-between gap-6.5 laptop:gap-5 tablet:py-5.75 tablet:gap-4.5 tablet:flex-wrap phone:py-5.5 phone:gap-2.5`}
          aria-label="Platform approach"
        >
          <p className="text-[11px] text-[#797b72] leading-[1.8] tablet:text-[10px] tablet:w-full tablet:flex tablet:gap-1 phone:text-[9px] phone:gap-0.75 phone:mb-2">
            Built around your world.
            <br className="tablet:hidden" />
            <strong className="font-normal text-[#353b2e]">
              Connected to what’s next.
            </strong>
          </p>
          <div className="flex items-center gap-3.25 text-[12px] laptop:gap-2.5 laptop:text-[10px] phone:text-[7px] phone:flex-col phone:text-center">
            <Icon
              className="size-5.75 text-[#70785c] tablet:size-4.75 phone:size-5"
              name="layers"
            />
            <span>Your existing tools</span>
          </div>
          <span className="strip-plus text-[#a0a491] text-[18px] font-light phone:text-[13px] phone:mt-[-16px]">
            +
          </span>
          <div className="flex items-center gap-3.25 text-[12px] laptop:gap-2.5 laptop:text-[10px] phone:text-[7px] phone:flex-col phone:text-center">
            <Icon
              className="size-5.75 text-[#70785c] tablet:size-4.75 phone:size-5"
              name="spark"
            />
            <span>yoona intelligence</span>
          </div>
          <span className="strip-plus text-[#a0a491] text-[18px] font-light phone:text-[13px] phone:mt-[-16px]">
            =
          </span>
          <div className="flex items-center gap-3.25 text-[12px] laptop:gap-2.5 laptop:text-[10px] phone:text-[7px] phone:flex-col phone:text-center">
            <Icon
              className="size-5.75 text-[#70785c] tablet:size-4.75 phone:size-5"
              name="orbit"
            />
            <span>A more connected brand</span>
          </div>
        </section>

        <ScrollBelt />

        <section
          className={`${pageWidth} ${sectionSpacing} platform-section`}
          id="platform"
        >
          <div className={`${sectionHeading} mb-11 tablet:mb-7 phone:mb-7.25`}>
            <div>
              <p
                className={`${eyebrow} gap-2.25 text-[10px] tracking-[1.7px] mb-4.75 tablet:text-[8px] tablet:mb-4 phone:text-[7px] phone:tracking-[1.3px]`}
              >
                LESS FRICTION. MORE FORWARD.
              </p>
              <h2 className={sectionTitle}>
                From what if.
                <br />
                To <em>what’s next.</em>
              </h2>
            </div>
            <p className="text-[15px] text-copy leading-[1.8] mb-1.25 tablet:text-[14px] tablet:max-w-65 phone:max-w-82.5">
              Your best work happens when everything connects.
              <br className="desktop-break tablet:hidden" /> Bring your product
              knowledge, business data, and
              <br className="desktop-break tablet:hidden" /> creative processes
              into one intelligence layer.
            </p>
          </div>
          <Workflow />
          <PopularAgents />
        </section>

        <section
          className={`${sectionSpacing} audience-section bg-white border-t border-t-line border-b border-b-line`}
          id="teams"
        >
          <div className={pageWidth}>
            <div
              className={`${sectionHeading} mb-11 tablet:mb-7 phone:mb-7.25`}
            >
              <div>
                <p
                  className={`${eyebrow} gap-2.25 text-[10px] tracking-[1.7px] mb-4.75 tablet:text-[8px] tablet:mb-4 phone:text-[7px] phone:tracking-[1.3px]`}
                >
                  YOUR EXPERTISE. AMPLIFIED.
                </p>
                <h2 className={sectionTitle}>
                  For the people
                  <br />
                  behind <em>the possibilities.</em>
                </h2>
              </div>
              <p className="text-[15px] text-copy leading-[1.8] mb-1.25 tablet:text-[14px] tablet:max-w-65 phone:max-w-82.5">
                Different perspectives. One shared ambition.
                <br />
                Give every team the context to move forward.
              </p>
            </div>
            <Audience />
          </div>
        </section>

        <section
          className={`${pageWidth} ${sectionSpacing} about-section grid grid-cols-[1fr_1fr] gap-21.25 items-center laptop:gap-11.25 tablet:gap-8.75 phone:grid-cols-[1fr] phone:gap-7.5`}
          id="about"
        >
          <div className="about-image relative h-112.5 rounded-[4px] overflow-hidden bg-canvas tablet:h-97.5 phone:h-75 phone:order-1">
            <Image
              className="[filter:saturate(0.55)] object-[50%_50%]"
              src="/images/yoona-team.jpg"
              alt="Anna Franziska Michel, CEO and co-founder of Yoona"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span className="image-note absolute bottom-5.5 left-5.5 text-white text-[8px] tracking-[1.4px] text-shadow-[0_1px_6px_#0009]">
              ANNA FRANZISKA MICHEL / CEO & CO-FOUNDER
            </span>
          </div>
          <div className="about-copy phone:order-0">
            <p
              className={`${eyebrow} gap-2.25 text-[10px] tracking-[1.7px] mb-6 tablet:text-[8px] phone:text-[7px] phone:mb-4.25`}
            >
              A LITTLE ABOUT US
            </p>
            <h2 className="text-[45px] leading-[1.13] tracking-[-2px] font-normal mb-5.75 laptop:text-[38px] tablet:text-[32px] phone:text-[37px] phone:mb-5">
              Fashion people.
              <br />
              Technology minds.
              <br />
              <em>One shared future.</em>
            </h2>
            <p className="max-w-105 text-[15px] leading-[1.8] text-copy mb-3.75 tablet:text-[14px]">
              We believe the future of fashion should be more creative, more
              connected, and more considered. That’s why we’re building yoona.
            </p>
            <p className="max-w-105 text-[15px] leading-[1.8] text-copy mb-3.75 tablet:text-[14px]">
              Led by co-founders Anna Franziska Michel and Volker Issbruecker,
              our team brings fashion and technology together to help brands
              turn the knowledge they already have into their next move.
            </p>
            <a
              href="https://www.yoona.ai/about"
              target="_blank"
              rel="noreferrer"
              className={`${textLink} gap-7 text-[11px] mt-1.75 phone:mt-0.75`}
            >
              Meet the people behind yoona{" "}
              <Icon className="size-5" name="arrow" />
            </a>
          </div>
        </section>

        <section
          className={`${pageWidth} resources-section px-13.75 py-10 flex items-center bg-white border border-line rounded-[5px] relative overflow-hidden gap-17.5 laptop:px-10 laptop:py-8.75 laptop:gap-11.25 tablet:p-7.5 tablet:gap-8.75 phone:items-start phone:gap-6 phone:flex-col`}
          id="resources"
        >
          <div className="resource-art" aria-hidden="true">
            <Image
              src="/images/brand/yoona-mark.png"
              alt=""
              width={1081}
              height={1081}
              unoptimized
              className="relative z-2 size-26 object-contain phone:size-22"
            />
            <div className="orbit-line orbit-one" />
            <div className="orbit-line orbit-two" />
            <span className="orbit-point" />
          </div>
          <div className="resource-copy relative z-2">
            <p
              className={`${eyebrow} gap-2.25 text-[8px] tracking-[1.7px] text-[#818c6b] mb-3.75 phone:text-[7px]`}
            >
              A NEW PERSPECTIVE
            </p>
            <h3 className="text-[33px] tracking-[-1.3px] leading-[1.15] font-normal laptop:text-[30px] tablet:text-[27px] phone:text-[28px]">
              Who builds the brand
              <br />
              when AI joins the team?
            </h3>
            <p className="text-[15px] leading-[1.8] text-copy mt-3.75 mb-1.25 tablet:text-[14px] phone:max-w-72.5">
              Explore what AI readiness really means for fashion, apparel, and
              footwear.
            </p>
            <a
              href="https://www.yoona.ai/whitepaper"
              target="_blank"
              rel="noreferrer"
              className={`${textLink} gap-7 text-[11px]`}
            >
              Read the whitepaper <Icon className="size-5" name="arrow" />
            </a>
          </div>
          <span className="resource-label absolute right-7.5 top-8.75 [writing-mode:vertical-rl] text-[7px] tracking-[1.2px] text-[#939d81] tablet:right-3.75 tablet:text-[6px] phone:right-4 phone:top-6.25">
            THE YOONA PERSPECTIVE — 01
          </span>
        </section>

        <section
          className="cta-section section-space pt-30 pb-26.25 flex flex-col items-center text-center laptop:py-20 tablet:py-16.25 phone:px-5"
          id="contact"
        >
          <p
            className={`${eyebrow} gap-2.25 text-[8px] tracking-[1.7px] mb-7 phone:text-[6px] phone:tracking-[1.2px] phone:mb-5.75`}
          >
            <span className="status-dot inline-block size-1.75 bg-sage rounded-full shrink-0" />{" "}
            YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h2 className="text-[64px] leading-[1.07] tracking-[-3.5px] font-normal tablet:text-[54px] phone:text-[41px] phone:tracking-[-2px]">
            A little less guessing.
            <br />A lot more <em>possibility.</em>
          </h2>
          <p className="text-[15px] text-copy mt-5.75 mb-6.75 phone:text-[14px] phone:mt-4.75 phone:mb-6 phone:max-w-65 phone:leading-[1.8]">
            Let’s explore what connected intelligence can do for your brand.
          </p>
          <a
            className="button button-dark px-6 py-4 inline-flex items-center justify-center gap-8.5 rounded-[5px] text-[12px] [transition:background_0.2s,transform_0.2s] bg-foreground text-white phone:px-5 phone:py-3.5 phone:text-[11px] hover:transform-[translateY(-2px)] hover:bg-[#414141]"
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
          >
            Request demo <Icon className="size-4.25" name="arrow" />
          </a>
          <a
            className="contact-email text-[9px] text-[#909485] mt-4.25 phone:text-[8px] hover:underline"
            href="mailto:support@yoona.ai"
          >
            Or say hello at support@yoona.ai
          </a>
        </section>
      </main>
      <footer className="footer bg-footer text-[#ecefe3] pt-13.75 phone:pt-9.5">
        <div
          className={`${pageWidth} footer-top flex justify-between gap-22.5 pb-16.25 tablet:gap-12.5 tablet:pb-11.25 phone:gap-8.75 phone:pb-9 phone:flex-col`}
        >
          <div className="phone:flex phone:justify-between phone:items-center">
            <a
              className="wordmark footer-logo inline-block"
              href="#"
              aria-label="Yoona home"
            >
              <YoonaLogo className="w-48 tablet:w-40 phone:w-36" light />
            </a>
            <p className="text-[11px] leading-[1.7] text-[#a8ae9c] mt-5.5 phone:m-0 phone:text-[9px]">
              Not just any agent.
              <br />
              Your next advantage.
            </p>
          </div>
          <div className="footer-links flex gap-22.5 pt-1.25 laptop:gap-11.25 tablet:gap-7.5 phone:gap-3 phone:justify-between">
            <div className="flex flex-col gap-3.25 phone:gap-3">
              <span className="text-[7px] tracking-[1.3px] text-[#8f9981] mb-2 phone:text-[6px] phone:tracking-[0.8px]">
                EXPLORE
              </span>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="#platform"
              >
                The platform
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="#agents"
              >
                Popular agents
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="#teams"
              >
                For your team
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="#about"
              >
                Our story
              </a>
            </div>
            <div className="flex flex-col gap-3.25 phone:gap-3">
              <span className="text-[7px] tracking-[1.3px] text-[#8f9981] mb-2 phone:text-[6px] phone:tracking-[0.8px]">
                GET CONNECTED
              </span>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="https://www.yoona.ai/demo"
                target="_blank"
                rel="noreferrer"
              >
                Book a demo{" "}
                <Icon className="size-2.75 phone:size-2.25" name="diagonal" />
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="https://design.yoona.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Log in{" "}
                <Icon className="size-2.75 phone:size-2.25" name="diagonal" />
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="mailto:support@yoona.ai"
              >
                Get in touch{" "}
                <Icon className="size-2.75 phone:size-2.25" name="diagonal" />
              </a>
            </div>
            <div className="flex flex-col gap-3.25 phone:gap-3">
              <span className="text-[7px] tracking-[1.3px] text-[#8f9981] mb-2 phone:text-[6px] phone:tracking-[0.8px]">
                KEEP EXPLORING
              </span>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="https://www.yoona.ai/whitepaper"
                target="_blank"
                rel="noreferrer"
              >
                Whitepaper
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="https://www.yoona.ai/press"
                target="_blank"
                rel="noreferrer"
              >
                Press
              </a>
              <a
                className="text-[10px] flex items-center gap-2.5 text-[#c7cebc] tablet:text-[9px] phone:text-[8px] phone:gap-1 hover:text-accent"
                href="https://www.linkedin.com/company/yoona-agents"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn{" "}
                <Icon className="size-2.75 phone:size-2.25" name="diagonal" />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${pageWidth} footer-bottom py-5 flex justify-between gap-5 border-t border-t-[#454b3c] text-[8px] text-[#8e9781] tablet:gap-3.75 tablet:text-[7px] phone:gap-3.5 phone:flex-col`}
        >
          <span>© 2026 yoona.ai. Made for what’s next.</span>
          <div className="flex gap-6.5 items-center tablet:gap-3.75 phone:gap-4.5 phone:flex-wrap">
            <a
              href="https://www.yoona.ai/impressum"
              target="_blank"
              rel="noreferrer"
            >
              Impressum
            </a>
            <a
              href="https://www.yoona.ai/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms & conditions
            </a>
            <span>
              Berlin, with possibility.{" "}
              <span className="tiny-dot inline-block size-1.25 rounded-full bg-[#9cae70] ml-1.75 align-middle" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
