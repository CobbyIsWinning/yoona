import Image from "next/image";
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
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-intro page-width">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> INTELLIGENCE, TAILORED TO
                FASHION
              </p>
              <h1 id="hero-heading">
                Fashion moves fast.
                <br />
                Think one step <em>ahead.</em>
              </h1>
            </div>
            <div className="hero-aside">
              <p>
                From first inspiration to the next big decision. Meet the AI
                agents connecting your creativity, data, and teams.
              </p>
              <a className="text-link" href="#platform">
                Discover your advantage <Icon name="arrow" />
              </a>
            </div>
          </div>
          <FashionCollage />
          <div className="hero-caption page-width">
            <p>
              <span className="small-cross">✳</span> Human creativity. Connected
              intelligence. Endless possibilities.
            </p>
            <a href="#platform" className="scroll-link">
              A NEW WAY FORWARD <Icon name="down" />
            </a>
          </div>
        </section>

        <section
          className="connection-strip page-width"
          aria-label="Platform approach"
        >
          <p>
            Built around your world.
            <br />
            <strong>Connected to what’s next.</strong>
          </p>
          <div>
            <Icon name="layers" />
            <span>Your existing tools</span>
          </div>
          <span className="strip-plus">+</span>
          <div>
            <Icon name="spark" />
            <span>yoona intelligence</span>
          </div>
          <span className="strip-plus">=</span>
          <div>
            <Icon name="orbit" />
            <span>A more connected brand</span>
          </div>
        </section>

        <ScrollBelt />

        <section
          className="platform-section page-width section-space"
          id="platform"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">LESS FRICTION. MORE FORWARD.</p>
              <h2>
                From what if.
                <br />
                To <em>what’s next.</em>
              </h2>
            </div>
            <p>
              Your best work happens when everything connects.
              <br className="desktop-break" /> Bring your product knowledge,
              business data, and
              <br className="desktop-break" /> creative processes into one
              intelligence layer.
            </p>
          </div>
          <Workflow />
          <PopularAgents />
        </section>

        <section className="audience-section section-space" id="teams">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR EXPERTISE. AMPLIFIED.</p>
                <h2>
                  For the people
                  <br />
                  behind <em>the possibilities.</em>
                </h2>
              </div>
              <p>
                Different perspectives. One shared ambition.
                <br />
                Give every team the context to move forward.
              </p>
            </div>
            <Audience />
          </div>
        </section>

        <section className="about-section section-space page-width" id="about">
          <div className="about-image">
            <Image
              src="/images/yoona-team.jpg"
              alt="Anna Franziska Michel, CEO and co-founder of Yoona"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span className="image-note">
              ANNA FRANZISKA MICHEL / CEO & CO-FOUNDER
            </span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT US</p>
            <h2>
              Fashion people.
              <br />
              Technology minds.
              <br />
              <em>One shared future.</em>
            </h2>
            <p>
              We believe the future of fashion should be more creative, more
              connected, and more considered. That’s why we’re building yoona.
            </p>
            <p>
              Led by co-founders Anna Franziska Michel and Volker Issbruecker,
              our team brings fashion and technology together to help brands
              turn the knowledge they already have into their next move.
            </p>
            <a
              href="https://www.yoona.ai/about"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Meet the people behind yoona <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="resources-section page-width" id="resources">
          <div className="resource-art" aria-hidden="true">
            <span>y.</span>
            <div className="orbit-line orbit-one" />
            <div className="orbit-line orbit-two" />
            <span className="orbit-point" />
          </div>
          <div className="resource-copy">
            <p className="eyebrow">A NEW PERSPECTIVE</p>
            <h3>
              Who builds the brand
              <br />
              when AI joins the team?
            </h3>
            <p>
              Explore what AI readiness really means for fashion, apparel, and
              footwear.
            </p>
            <a
              href="https://www.yoona.ai/whitepaper"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Read the whitepaper <Icon name="arrow" />
            </a>
          </div>
          <span className="resource-label">THE YOONA PERSPECTIVE — 01</span>
        </section>

        <section className="cta-section section-space" id="contact">
          <p className="eyebrow">
            <span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h2>
            A little less guessing.
            <br />A lot more <em>possibility.</em>
          </h2>
          <p>
            Let’s explore what connected intelligence can do for your brand.
          </p>
          <a
            className="button button-dark"
            href="https://www.yoona.ai/demo"
            target="_blank"
            rel="noreferrer"
          >
            Request demo <Icon name="arrow" />
          </a>
          <a className="contact-email" href="mailto:support@yoona.ai">
            Or say hello at support@yoona.ai
          </a>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top page-width">
          <div>
            <a
              className="wordmark footer-logo"
              href="#"
              aria-label="Yoona home"
            >
              yoona<span>®</span>
            </a>
            <p>
              Not just any agent.
              <br />
              Your next advantage.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <a href="#platform">The platform</a>
              <a href="#agents">Popular agents</a>
              <a href="#teams">For your team</a>
              <a href="#about">Our story</a>
            </div>
            <div>
              <span>GET CONNECTED</span>
              <a
                href="https://www.yoona.ai/demo"
                target="_blank"
                rel="noreferrer"
              >
                Book a demo <Icon name="diagonal" />
              </a>
              <a
                href="https://design.yoona.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Log in <Icon name="diagonal" />
              </a>
              <a href="mailto:support@yoona.ai">
                Get in touch <Icon name="diagonal" />
              </a>
            </div>
            <div>
              <span>KEEP EXPLORING</span>
              <a
                href="https://www.yoona.ai/whitepaper"
                target="_blank"
                rel="noreferrer"
              >
                Whitepaper
              </a>
              <a
                href="https://www.yoona.ai/press"
                target="_blank"
                rel="noreferrer"
              >
                Press
              </a>
              <a
                href="https://www.linkedin.com/company/yoona-agents"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Icon name="diagonal" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom page-width">
          <span>© 2026 yoona.ai. Made for what’s next.</span>
          <div>
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
              Berlin, with possibility. <span className="tiny-dot" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
