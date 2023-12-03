import React from "react";
import Image from "next/image";

const Services = () => {
  const cards = [
    {
      id: 1,
      url: "/design.png",
      headingName: "Reliable Databases",
      mainParagraph:
        "Creating elegant designs suited for your needs desing theory.",
      headingTools: "Backend tools I use",
      parapraphs: ["PostgreSQL", "PostMan", "Figma"],
    },
    {
      id: 2,
      url: "/code.png",
      headingName: "Various Frameworks",
      mainParagraph: "Developing awesome projects with various frameworks.",
      headingTools: "Languages I know",
      parapraphs: ["React", "Angular", "Go"],
    },
    {
      id: 3,
      url: "/consulting.png",
      headingName: "Types of Services",
      mainParagraph: "Providing high-quality services for everyone.",
      headingTools: "Services I provide",
      parapraphs: ["Databases", "Projects", "Backend Development Assistance"],
    },
  ];

  return (
    <section className="lg:flex gap-10">
      {cards.map((card) => (
        <div className=" text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={card.url} width={90} height={90} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">{card.headingName}</h3>
          <p className="py-2">{card.mainParagraph}</p>
          <h4 className="py-4 text-teal-600">{card.headingTools}</h4>
          {card.parapraphs.map((parapraph) => (
            <p className=" py-1">{parapraph}</p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Services;
