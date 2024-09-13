import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "@fontsource/poppins";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import WordPullUp from "../components/magicui/word-pull-up";
import Particles from "../components/magicui/particles";
import { DockBar } from "../components/DockBar";
import Meteors from "../components/magicui/meteors";
import { useTheme } from "../components/ThemeContext.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@fontsource/bebas-neue";

import TypingAnimation from "../components/magicui/typing-animation.jsx";
import { useGSAP } from "@gsap/react";
import Data, { IconCloudDemo } from "./Data.jsx";
import { FadeText } from "../components/magicui/fade-text.jsx";
import { BorderBeam } from "../components/magicui/border-beam.jsx";
import "./intro.css";
import cat1 from "/cat1.svg";

const muiTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function Intro() {
  {
    /* <div ref={aboutRef} className="w-full flex justify-center items-center">
          
          <VelocityScroll 
            text="About"
            default_velocity={4}
            className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
         
        </div> */
  }
  const refName = useRef();

  const refInfo = useRef();
  const containerRef = useRef();
  const aboutRef = useRef();
  const photoRef = useRef();

  const projectRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    {
      /**intro timeline */
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refName.current,
        start: "top-=top top",
        end: "bottom top",
        scrub: true,
        pin: true, // Keeps the intro section pinned while the animation plays
        markers: false,
        pinSpacer: false,
      },
    });

    tl.fromTo(
      refName.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -100, duration: 1, ease: "power1.inOut" }
    ).fromTo(
      photoRef.current,
      { opacity: 0, y: -100 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
      "<0.5"
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=30% 70%",
        end: "bottom bottom",
        scrub: true,
        markers: false,
        pin: false, // Pin the container itself, not individual elements
        pinSpacing: false, // Try removing the extra spacing
      },
    });

    tl2
      .fromTo(
        refInfo.current,
        { opacity: 0, x: -100 }, // Starts off-screen to the left
        { opacity: 1, x: -30, duration: 1, ease: "power1.inOut" } // Moves into place
      )
      .fromTo(
        photoRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" },
        "<0.5"
      );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top-=50% center", // Adjust as needed to ensure it's in view
        end: "bottom bottom", // Adjust end point to fit your needs
        scrub: true,
        markers: false,
        pin: containerRef.current,
        pinSpacing: true,
      },
    });
    tl3.to(aboutRef.current, { opacity: 1 });
  }, []);

  const { isDayMode } = useTheme();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="flex min-h-screen shadow-sm">
        <div className="absolute w-full h-screen bg-[var(--cookies)] z-10">
          {isDayMode ? (
            <Particles
              className="absolute w-full h-screen"
              quantity={155}
              ease={80}
              color={"#181818"}
              refresh
            />
          ) : (
            <Meteors number={45} />
          )}

          <div className="flex flex-1 justify-center items-center h-full">
            <div ref={refName} className="flex flex-col">
              <Typography
                sx={{
                  ml: 2,
                  fontFamily: "CustomFont, sans-serif",
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "4rem",
                    lg: "9rem",
                  },
                }}
                variant="h1"
              >
                <WordPullUp words={"Tony Tran"} />
              </Typography>

              <Typography
                sx={{
                  ml: 4,
                  mt: 3,
                  fontSize: "2rem",
                  fontFamily: "CustomFont, sans-serif",
                  fontStyle: "italic",
                }}
              >
                Aspiring Data Scientist
              </Typography>
              <DockBar />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-screen flex justify-center bg-[var(--cookies)]  pb-8 z-0">
        <div
          ref={containerRef}
          className="flex flex-1 min-h-screen flex-col justify-start sm:justify-center relative bg-[var(--cookies)] p-7"
        >
          {/** Name Row */}

          <div ref={refInfo} className="relative ">
            {/*header*/}

            <Typography
              sx={{
                ml: 4,
                mb: 2,
                fontSize: "4rem",
                fontFamily: "Poppins, sans-serif",
                fontStyle: "italic",
              }}
            >
              Aspiring Data Scientist
            </Typography>

            {/** Role Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 ">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem",
                  color: "black",
                  minWidth: "80px",
                }}
                className="text-left sm:text-right"
              >
                Role
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "2rem",
                  color: "black",
                  marginLeft: "8px",
                }}
              >
                <FadeText
                  text={"Student @UoG, Mathematical Science (B.math)"}
                  direction="left"
                />
              </Typography>
            </div>

            {/** Info Row */}
            <div className="flex flex-col sm:flex-row items-start  sm:items-center ">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem",
                  color: "black",
                  minWidth: "80px",
                  alignSelf: "flex-start",
                }}
                className="text-left sm:text-right"
              >
                Info
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.7rem",
                    md: "0.8rem",
                    lg: "1.25rem",
                  },
                  color: "black",
                  marginLeft: "8px",
                  maxWidth: {
                    xs: "80vw",
                    md: "30vw",
                    lg: "43vw",
                  },
                  wordWrap: "break-word",
                  marginBottom: "7rem",
                  height: "3rem",
                  display: "absolute",
                }}
              >
                <TypingAnimation
                  className=" font-bold text-black dark:text-white"
                  text="I'm self-taught in computer science and started at the age of 14. 
      Over the years, I've explored various programming languages and developed a passion for problem-solving.
      "
                />
              </Typography>
            </div>
          </div>
          <div
            ref={photoRef}
            className="imageBox shadow-md m-3 relative justify-center items-center"
          >
            <img
              src="website_photo/selfie_1.jpg"
              alt="Your Image Description"
            />
          </div>
        </div>

        {/** Right side for photo or additional content */}
        <div className="flex w-2/5 bg-white sticky z-10  flex-col mr-7">
          <div className="flex flex-1  items-center justify-center">
            <div className="flex-1 flex">
              Born and raised in Canada, Ontario
            </div>
            <div className="imageBox flex flex-1 shadow-md m-3 relative w-screen"></div>
          </div>
        </div>
      </div>

      {/**About me page 2 */}
      <div ref={aboutRef} className="h-screen flex z-10">
        <div className="flex flex-1 "></div>
        {/**right side */}
        <div className="flex flex-1 flex-col  z-10">
          <div className="flex flex-1 justify-start text-black ">
            <div className="imageBox flex flex-1 shadow-md m-3 relative"></div>

            <img src={"website"} alt="Charlie - my Cat" />
          </div>

          <div className="flex flex-1 text-black  z-10">
            <p>hi I am at the bottom</p>
          </div>
        </div>
      </div>

      {/**Project*/}
      <div ref={projectRef} className="h-screen flex z-10">
        <div className=""></div>
      </div>
    </MuiThemeProvider>
  );
}
