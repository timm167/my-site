import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <div className="flex items-center justify-between p-2 laptop:p-0 mt-2 laptop:mt-10">
      <Socials />
      <h1 className="text-sm text-bold">
        Made by {" "}
        <Link href="https://github.com/timm167">
          <a className="underline underline-offset-1">Tim Charteris</a>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
