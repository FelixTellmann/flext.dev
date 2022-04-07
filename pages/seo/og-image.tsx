import clsx from "clsx";
import { useRouter } from "next/router";
import { FC } from "react";

type OgImageProps = {};

export const OgImage: FC<OgImageProps> = () => {
  const router = useRouter();
  const { theme = "light", bg = "dots", style = 1 } = router.query;
  const radial = theme === "dark" ? "dimgray" : "lightgray";
  const a = "rgb(26, 29, 30)";
  const b = "rgb(21, 23, 24)";
  const c = "#fafafa";
  const d = "#fff";

  return (
    <div className="relative h-screen max-h-[1170px] max-w-[2048px] ">
      <div className="relative"></div>
      <div
        className="absolute inset-0 h-full w-full" /**/
        style={{ backgroundImage: `linear-gradient(${c}, ${d})` }}
      >
        {[...new Array(15)].map((_, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 "
            style={{
              width: `${180 + 140 * index}px`,
              height: `${180 + 140 * index}px`,
              opacity: `${Math.min(0.7, 1.5 - index / 10)}`,
              transform: `translate(-50%, -50%) rotate(${-45 + index * 30}deg)`,
              filter: `blur(${Math.max(0, -4 + index / 1.5)}px)`,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle
                cx="50"
                cy="50"
                r="49"
                stroke={`url(#circle-${index})`}
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></circle>
              <defs>
                <linearGradient
                  id={`circle-${index}`}
                  gradientUnits="userSpaceOnUse"
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                >
                  <stop style={{ stopColor: "rgba(160,173,166,0.4)" }}></stop>
                  {/*rgba(226,240,253,0.23)*/}
                  <stop style={{ stopColor: "rgba(5,178,178,0.5)" }} offset="1"></stop>
                  {/*"rgba(26,255,210,0.47)" */}
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );

  /*return (
    <>
      <div
        className={clsx(
          "h-screen max-h-[1170px] max-w-[2048px]",
          theme === "dark" ? "bg-black" : "bg-white",
          theme === "dark" ? "text-white" : "text-black"
        )}
        style={
          {
            dots: {
              backgroundImage: `radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%)`,
              backgroundSize: "100px 100px",
            },
            blueprint: {
              backgroundColor: `#269`,
              backgroundImage: `linear-gradient(white 2px, transparent 2px),
                                linear-gradient(90deg, white 2px, transparent 2px),
                                linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`,
              backgroundSize: `100px 100px, 100px 100px, 20px 20px, 20px 20px`,
              backgroundPosition: `-2px -2px, -2px -2px, -1px -1px, -1px -1px`,
            },
            cross: {
              backgroundImage: `radial-gradient(black 3px, transparent 4px),
                                radial-gradient(black 3px, transparent 4px),
                                linear-gradient(#fff 4px, transparent 0),
                                linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
                                linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px)`,
              backgroundSize: `109px 109px, 109px 109px,100% 6px, 109px 109px`,
              backgroundPosition: `54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px`,
            },
          }[(bg as string) ?? "dots"]
        }
      >
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-[140px] font-black uppercase tracking-wider">Hello</h1>
        </div>
      </div>
    </>
  );*/
};

export default OgImage;
