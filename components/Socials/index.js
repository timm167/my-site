import React, { useState } from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleClick = (social, index) => {
    if (social.link.includes("copy")) {
      navigator.clipboard.writeText(social.link.split("copy:")[1]);
      setCopiedIndex(index);

      setTimeout(() => setCopiedIndex(null), 1000); // Hide after 2 seconds
      return;
    }
    window.open(social.link);
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Button onClick={() => handleClick(social, index)}>
            {social.title}
          </Button>
          {copiedIndex === index && (
            <span className="text-green-500 text-sm">Copied!</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Socials;
