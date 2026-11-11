import Image from "next/image";
import { eyebrow, pageWidth, sectionHeading, sectionTitle } from "./styles";

// Names, roles, and portraits published on https://www.yoona.ai/about.
const team = [
  {
    id: "anna-franziska-michel",
    image: "/images/team/anna-franziska-michel.png",
    name: "Anna Franziska Michel",
    role: "CEO & Co-Founder",
    leadership: true,
  },
  {
    id: "volker-issbruecker",
    image: "/images/team/volker-issbruecker.png",
    name: "Volker Issbruecker",
    role: "CTO & Co-Founder",
    leadership: true,
  },
  {
    id: "luize-ferreira",
    image: "/images/team/luize-ferreira.webp",
    name: "Luize Ferreira",
    role: "Head of Operations",
  },
  {
    id: "miriam-barnhart",
    image: "/images/team/miriam-barnhart.png",
    name: "Miriam Barnhart",
    role: "Customer Success & Forward Deployed Engineer (US)",
  },
  {
    id: "elena-nuernberger",
    image: "/images/team/elena-nuernberger.webp",
    name: "Elena Nürnberger",
    role: "Customer Success (Germany)",
  },
  {
    id: "melisa-cilli",
    image: "/images/team/melisa-cilli.png",
    imagePosition: "object-center",
    name: "Melisa Cilli",
    role: "Head of Customer Success (Europe / UK)",
  },
  {
    id: "kamran-valijonov",
    image: "/images/team/kamran-valijonov.png",
    name: "Kamran Valijonov",
    role: "Lead Software Engineer",
  },
  {
    id: "sethu-ramanathan",
    image: "/images/team/sethu-ramanathan.png",
    name: "Sethu Ramanathan",
    role: "AI Specialist & Machine Engineer",
  },
];

export function LeadershipTeam() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className={`${pageWidth} pb-27.5 laptop:pb-20 tablet:pb-16.25 phone:pb-13.75`}
    >
      <div
        className={`${sectionHeading} mb-11 border-t border-line pt-16.5 tablet:mb-8 tablet:pt-11.25 phone:mb-7 phone:pt-8.25`}
      >
        <div>
          <p
            className={`${eyebrow} mb-4.75 gap-2.25 text-[10px] tracking-[1.7px] tablet:mb-4 tablet:text-[8px] phone:text-[7px] phone:tracking-[1.3px]`}
          >
            LEADERSHIP & TEAM
          </p>
          <h2 id="leadership-heading" className={sectionTitle}>
            Meet the people
            <br />
            <em>moving yoona forward.</em>
          </h2>
        </div>
        <p className="mb-1.25 max-w-82.5 text-[15px] leading-[1.8] text-copy tablet:max-w-65 tablet:text-[14px] phone:max-w-82.5">
          Fashion, technology, operations, and customer success. Meet the people
          bringing it all together.
        </p>
      </div>

      <div className="team-grid grid grid-cols-4 gap-x-6 gap-y-10 tablet:grid-cols-2 phone:gap-x-3 phone:gap-y-7">
        {team.map((member) => (
          <article
            key={member.id}
            aria-labelledby={`team-${member.id}`}
            className="team-member flex min-w-0 flex-col items-center text-center"
          >
            <div className="relative size-40 shrink-0 tablet:size-36 phone:size-24">
              <div className="relative size-full overflow-hidden rounded-full bg-[#e5e3ff]">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 600px) 96px, (max-width: 800px) 144px, 160px"
                  className={`object-cover ${member.imagePosition ?? "object-top"}`}
                />
              </div>
              {member.leadership && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-line bg-white px-2.5 py-1 text-[8px] font-medium tracking-[0.8px]">
                  LEADERSHIP
                </span>
              )}
            </div>
            <h3
              id={`team-${member.id}`}
              className="mt-4 text-[19px] leading-[1.3] font-normal tracking-[-0.5px] tablet:text-[18px] phone:mt-3 phone:min-h-[2.6em] phone:text-[16px] phone:tracking-[-0.3px]"
            >
              {member.name}
            </h3>
            <p className="mt-1.5 max-w-65 text-[13px] leading-[1.7] text-copy phone:text-[12px]">
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
