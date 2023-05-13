import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimationProps, Variant, useMotionValue, useTime, useTransform, animate, useMotionTemplate } from "framer-motion";
import { Variants, useAnimate, stagger } from "framer-motion";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const dojaVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.4,
      delay: 0.3,
    },
  },
  exit: {
    scale: 0,
  },
};

const finneasVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.4,
      delay: 0.2,
    },
  },
  exit: {
    scale: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const mileyVariants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.4,
      delay: 0.13,
    },
  },
  exit: {
    scale: 0,
    transition: {
      delay: 0.25,
    },
  },
};

const spotifyTicker: Variants = {
  hovered: {
    height: "2rem",
    transition: {
      type: "spring",
      bounce: 0.6,
    },
  },
};

const songs = [
  {
    img: "1.webp",
    title: "Slowdive - Slomo",
  },
  {
    img: "2.webp",
    title: "Paul's Dream - Dune",
  },
  {
    img: "3.webp",
    title: "Good Gilrs - Sacred as Hell",
  },
  {
    img: "4.webp",
    title: "Mothra Leo - The Last Hope",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  const [scope, animateChildren] = useAnimate();

  const time = useTime();

  const left = useMotionValue(open ? 250 : 67);
  const top = useMotionValue(open ? 250 : 300);
  const width = useMotionValue(open ? 64 : 10);
  const padding = useMotionValue(open ? 8 : 1);
  const paddingBottom = useMotionValue(open ? 24 : 56);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const spotifyBarTop = useMotionValue(0);
  const spotifyBarTopPos = useMotionTemplate`${spotifyBarTop}%`;

  useEffect(() => {
    if (hoveredIndex !== null) {
      animate(spotifyBarTop, hoveredIndex * 25, {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
      });
    }
  }, [hoveredIndex, spotifyBarTop.version]);

  const handleClick = () => {
    if (open) {
      animate([
        [left, 67, { duration: 0.5, ease: "easeOut" }],
        [top, 300, { duration: 0.5, ease: "easeOut" }],
        [width, 10, { duration: 0.5, ease: "easeOut" }],
        [padding, 1, { duration: 0.5, ease: "easeOut" }],
        [paddingBottom, 56, { duration: 0.5, ease: "easeOut" }],
      ]);
      animateChildren(
        "div",
        {
          opacity: 0,
          left: -500,
        },
        {
          delay: stagger(0.1),
        }
      );
    } else {
      animate([
        [left, 250, { duration: 0.5, ease: "easeOut" }],
        [top, 250, { duration: 0.5, ease: "easeOut" }],
        [width, 64, { duration: 0.5, ease: "easeOut" }],
        [padding, 8, { duration: 0.5, ease: "easeOut" }],
        [paddingBottom, 24, { duration: 0.5, ease: "easeOut" }],
      ]);
      animateChildren(
        "div",
        {
          opacity: 1,
          left: 0,
        },
        {
          delay: stagger(0.1),
        }
      );
    }
    setOpen(!open);
  };

  return (
    <div className="relative flex h-screen items-center justify-center gap-4 bg-gray-50 px-36">
      <button
        onClick={handleClick}
        className="absolute top-[5%] rounded-lg bg-black px-4 py-1.5 font-dm text-sm font-medium text-gray-50 hover:bg-black/90"
      >
        {open ? "Show Details" : "Hide Details"}
      </button>

      <div className="relative flex h-[768px] justify-center ">
        <div className="aspect-[1.5] h-full overflow-hidden rounded-lg ">
          <AnimatePresence>
            {!open && (
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="/window-spotify.webp"
              ></motion.img>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute right-0 top-1/2 aspect-square w-[500px] -translate-y-1/2">
          <AnimatePresence>
            {open && (
              <motion.div
                className="relative aspect-square w-[500px] origin-bottom-left rounded-[30px] bg-gradient-to-br from-[rgb(247_255_245)] to-[rgb(173_255_216)]"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              ></motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={dojaVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute left-12 top-12 h-24 w-24 overflow-hidden rounded-lg"
              >
                <img src="/doja-cat.webp"></img>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={finneasVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute right-10 top-32 h-32 w-32 overflow-hidden rounded-lg"
              >
                <img src="/finneas.webp"></img>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={mileyVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute bottom-14 left-24 h-40 w-40 overflow-hidden rounded-lg"
              >
                <img src="/miley.webp"></img>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="group absolute flex cursor-pointer flex-col items-center justify-between gap-4 rounded-full bg-[#1bd761]"
            whileHover="hovered"
            initial="initial"
            style={{
              left,
              top,
              width,
              padding,
              paddingBottom,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="aspect-square w-full">
                <path
                  d="M 38.196 21.276 C 30.46 16.682 17.7 16.26 10.314 18.502 C 9.128 18.862 7.875 18.191 7.515 17.005 C 7.155 15.819 7.826 14.566 9.012 14.206 C 17.49 11.632 31.582 12.13 40.488 17.416 C 41.506 18.07 41.823 19.412 41.205 20.452 C 40.587 21.492 39.257 21.856 38.196 21.276 Z M 37.944 28.082 C 37.402 28.962 36.251 29.237 35.37 28.698 C 28.92 24.734 19.086 23.584 11.454 25.9 C 10.806 26.125 10.086 25.977 9.579 25.514 C 9.072 25.052 8.858 24.349 9.023 23.682 C 9.188 23.016 9.704 22.493 10.368 22.32 C 19.084 19.676 29.92 20.956 37.328 25.51 C 38.208 26.05 38.484 27.204 37.944 28.082 Z M 35.006 34.616 C 34.8 34.955 34.467 35.199 34.082 35.292 C 33.696 35.386 33.288 35.322 32.95 35.114 C 27.314 31.67 20.22 30.892 11.866 32.8 C 11.07 32.961 10.291 32.458 10.111 31.667 C 9.93 30.875 10.413 30.084 11.2 29.884 C 20.342 27.794 28.184 28.694 34.51 32.56 C 34.849 32.767 35.091 33.099 35.184 33.485 C 35.277 33.871 35.213 34.278 35.006 34.616 Z M 24 0 C 10.746 0 0 10.746 0 24 C 0 37.256 10.746 48 24 48 C 37.256 48 48 37.256 48 24 C 48 10.746 37.256 0 24 0 Z"
                  fill="hsl(0, 0%, 100%)"
                ></path>
              </svg>
            </div>

            <motion.div
              variants={{
                hovered: {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  opacity: 1,
                  transition: {
                    delay: 0.125,
                  },
                },
                initial: {
                  opacity: 0,
                  backgroundColor: "rgba(255, 255, 255, 0)",
                },
              }}
              className="relative flex w-2.5 flex-col items-center justify-center rounded-full"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div key={i} variants={spotifyTicker} className="flex h-2.5 w-2.5 " onMouseEnter={() => setHoveredIndex(i)}></motion.div>
              ))}
              <motion.div
                className="absolute top-0 h-1/4 w-2.5 rounded-full bg-white"
                style={{
                  top: spotifyBarTopPos,
                }}
              ></motion.div>
              <motion.div
                className="pointer-events-none absolute flex items-center justify-center gap-2 rounded-lg bg-gray-900 p-2 pr-4"
                style={{
                  top: spotifyBarTopPos,
                  left: "24px",
                  transform: "translateY(-25%)",
                }}
              >
                <div className="aspect-square h-14 overflow-hidden rounded bg-gray-700">
                  <img src={songs[hoveredIndex || 0].img}></img>
                </div>
                <div className="flex flex-1 flex-col font-dm">
                  <div className="whitespace-nowrap text-lg font-medium leading-tight text-gray-50">{songs[hoveredIndex || 0].title}</div>
                  <div className="whitespace-nowrap leading-tight text-gray-500">Play on Spotify</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-0 top-0 aspect-square w-[500px]">
          <motion.div ref={scope} className="flex flex-col gap-20 text-5xl font-semibold text-gray-300">
            <motion.div className="relative" initial={{ opacity: 0 }}>
              Color your calendar to organize
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0 }}>
              Instantly know if someone is available
            </motion.div>
            <motion.div initial={{ opacity: 0 }} className="relative text-gray-800">
              Track what you listen to when
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0 }}>
              Send scheduling lists guests love
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0 }}>
              Always know what your team is up to
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
