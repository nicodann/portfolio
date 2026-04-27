"use client";

import links from "@/data/links.json";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

export default function Header({
  setSelectedResource,
}: {
  setSelectedResource: Dispatch<SetStateAction<string>>;
}) {
  const name = "Nico Dann";
  const letterArray = name.split("");
  const letterArrayUnicode = [...letterArray];

  letterArrayUnicode.forEach((letter, i) => {
    if (letter === " ") {
      letterArrayUnicode[i] = "\u00A0";
    }
  });

  const initialLetterMovedObject = letterArrayUnicode.reduce(
    (a, _letter, i) => {
      return { ...a, [i]: false };
    },
    {},
  );
  const [letterMovedObject, setLetterMovedObject] = useState<{
    [key: string]: boolean;
  }>(initialLetterMovedObject);

  const bgColours = [
    "B7C9E2", //light grey blue
    "D6DBDC", //light grey
    "526760", //green-grey
    "374B4A", //dark green-grey
    // "DA3E52", // pinkey-red
    "FE5F00", // orange
  ];
  const [bgColour, setBgColour] = useState<string>(bgColours[0]);
  const [colourIndex, setColourIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  const displayResetButton = Object.values(letterMovedObject).some(Boolean);

  const incrementColourIndex = () => {
    const nextIndex =
      colourIndex === bgColours.length - 1 ? 0 : colourIndex + 1;
    setColourIndex(nextIndex);
    return nextIndex;
  };

  const incrementCounter = () => {
    if (counter === name.length) {
      setCounter(1);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  const handleLetterClick = (i: number) => {
    const newColourIndex = incrementColourIndex();
    setBgColour(bgColours[newColourIndex]);
    incrementCounter();
    setLetterMovedObject((prev) => ({ ...prev, [i]: true }));
  };

  const handleResetClick = () => {
    setBgColour(bgColours[0]);
    // incrementColourIndex();
    setCounter(1);
    setLetterMovedObject(initialLetterMovedObject);
  };

  return (
    <header
      className="flex justify-center relative pb-20"
      style={{ backgroundColor: bgColour ? `#${bgColour}` : undefined }}
    >
      <div
        id="header-content"
        className="
          flex 
          flex-col 
          lg:flex-row 
          gap-12 
          flex-wrap 
          justify-between 
          lg:w-[1200px]
          text-center
          pb-4
        "
      >
        <div
          id="title_reset_button"
          className="
            flex 
            flex-col 
            lg:items-end 
            justify-center 
            lg:justify-between 
            lg:gap-2
          "
        >
          <div className="flex justify-center cursor-pointer">
            {letterArrayUnicode.map((letter, i) => {
              return (
                <h1
                  key={i}
                  onClick={() => handleLetterClick(i)}
                  style={{
                    position: "relative",
                    top: !letterMovedObject[i] ? "0px" : "-400px",
                    transition: "top, 1s",
                  }}
                >
                  {letter}
                </h1>
              );
            })}
          </div>
          <button
            className="
                lg:relative
                "
            style={{
              transition: "all, 1s",
              left: displayResetButton ? "400px" : "0px",
              fontSize: displayResetButton ? "2em" : "1em",
            }}
          >
            {displayResetButton ? (
              <h3
                className="text-white cursor-pointer"
                onClick={() => handleResetClick()}
              >
                RESET
              </h3>
            ) : (
              <h3
                className="text-white cursor-pointer"
                onClick={() => handleResetClick()}
              >
                * click a letter
              </h3>
            )}
          </button>
        </div>

        <div
          id="second_title_plus_subtitle_nav"
          className="
            flex 
            flex-col-reverse 
            lg:flex-row 
            items-center 
            lg:items-start 
            lg:gap-4
          "
        >
          <div
            id="second_name"
            className="flex text-black"
            style={{
              height: displayResetButton ? "40px" : 0,
              transition: "all 1s",
            }}
          >
            {letterArrayUnicode.map((letter, i) => {
              return (
                <h1
                  key={i}
                  style={{
                    position: "relative",
                    top: letterMovedObject[i] ? "0px" : "-800px",
                    opacity: !letterMovedObject[i] ? 0 : 1,
                    transition: "top, 1s, opacity, 1s",
                    color: bgColours[colourIndex + 2],
                  }}
                >
                  {letter}
                </h1>
              );
            })}
          </div>

          <div id="subtitle_nav" className="flex flex-col gap-6 sm:gap-0">
            <h2 style={{ color: bgColours[colourIndex + 1] }}>
              Full Stack Web Developer
            </h2>

            <nav className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-end flex-wrap">
              {links.map((link, i) => (
                <Fragment key={i}>
                  <h3 key={i}>
                    <Link
                      href={link.href}
                      onClick={
                        link.href.startsWith("#resume")
                          ? () => setSelectedResource("resume")
                          : undefined
                      }
                    >
                      {link.name}
                    </Link>
                  </h3>

                  {i < links.length - 1 && (
                    <h3 className="hidden sm:inline">|</h3>
                  )}
                </Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-[-1px] left-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C360,80 1080,0 1440,0 L1440,80 L0,80 Z"
          fill="rgb(218, 62, 82)"
        />
      </svg>
    </header>
  );
}
