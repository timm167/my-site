import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Socials from "../Socials";
// Local Data
import data from "../../data/portfolio.json";
import Link from "next/link";
import Image from "next/image";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [contact, setContact] = useState(false);

  const { name, showBlog, showResume } = data;


  useEffect(() => {
    setMounted(true);
    if (theme != "dark" ){
      setTheme("light");
    } else if (theme != "light") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null; 
  }

  return (
    <>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky
        } dark:text-white top-0 z-10 tablet:flex`}
        style={{ backgroundColor: theme === "dark" ? "#131210" : "white" }}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        <div className="flex">
          <Button onClick={handleWorkScroll}>Portfolio</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <a href="/Timothy-_harteris_CV.pdf" target="_blank" rel="noopener noreferrer">
               <Button className="first:ml-1">View CV</Button>
          </a>

          <Button onClick={() => setContact(!contact)}>
            Contact
          </Button>
          {contact && <Socials className="highlight underline" />}
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
            <Image
              className="h-6" 
              src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              width={24} 
              height={24}  
              alt={theme === "dark" ? "Moon Icon" : "Sun Icon"} 
            />
            </Button>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Header;
