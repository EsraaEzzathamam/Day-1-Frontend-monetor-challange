import React from "react";
import Image from "next/image";
import MediaLink from "./MediaLink";

const links = [
  { linkTitle: "Github", url: "https://github.com/esraaezzathamam" },
  {
    linkTitle: "LinkedIn",
    url: "https://www.linkedin.com/in/esraa-ezzat-hamam",
  },
  {
    linkTitle: "Instagram",
    url: "https://www.instagram.com/esraa.ezzat.hamam/",
  },
  { linkTitle: "Email", url: "mailto:esraaezzathamam@gmail.com" },
  { linkTitle: "Phone", url: "tel:+201" },
];
const Card = () => {
  return (
    <div className="cardBackground p-8 w-[450px] h-[650px] rounded-2xl">
      <div className="flex justify-center items-center w-24 h-24 overflow-hidden mb-6">
        <Image
          src="/assets/3.jpeg"
          alt="profile-image"
          width={192}
          height={192}
          className="h-full w-full rounded-full  object-cover "
        />
      </div>
      <h1 className="font-semibold text-2xl mb-[4px]"> Esraa Ezzat</h1>
      <h3 className="neon font-semibold text-sm mb-4">6 October, Giza </h3>
      <h4 className="font-light text-sm mb-4">
        {" "}
        &quot;Front-end developer&quot;
      </h4>
      {links.map((link) => (
        <MediaLink
          key={link.url}
          linkData={{ title: link.linkTitle, link: link.url }}
        />
      ))}
    </div>
  );
};
export default Card;
