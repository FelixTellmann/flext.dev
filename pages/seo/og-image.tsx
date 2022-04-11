import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

type OgImageProps = {};

const Rings = ({ dark }: { dark?: boolean }) => {
  const bgFrom = dark ? "rgb(26, 29, 30)" : "#fafafa";
  const bgTo = dark ? "rgb(21, 23, 24)" : "#fff";
  const detailFrom = dark ? `rgba(226,240,253,0.23)` : "rgba(160,173,166,0.4)";
  const detailTo = dark ? `rgba(26,255,210,0.47)` : "rgba(5,178,178,0.5)";

  return (
    <div
      className="absolute inset-0 h-full w-full select-none"
      style={{ backgroundImage: `linear-gradient(${bgFrom}, ${bgTo})` }}
    >
      {[...new Array(15)].map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 select-none"
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
                <stop style={{ stopColor: detailFrom }} />
                <stop style={{ stopColor: detailTo }} offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

function Grid({ dark }: { dark?: boolean }) {
  const dots = dark ? `rgba(255, 255, 255, 0.78)` : `rgba(0,0,0,0.7)`;
  const bg = dark ? `rgb(14, 14, 14)` : `#fafafa`;
  const lines = dark ? `rgba(255, 255, 255, 0.42)` : `rgba(0, 0, 0, 0.3)`;

  return (
    <div
      className="absolute inset-0 h-full w-full select-none"
      style={{
        backgroundColor: bg,
        backgroundImage: `radial-gradient(${dots} 1px, transparent 3px),
                          radial-gradient(${dots} 1px, transparent 3px),
                          linear-gradient(${bg} 4px, transparent 0),
                          linear-gradient(45deg, transparent 74px, transparent 75px, ${bg} 75px, ${lines} 76px, transparent 77px, transparent 109px),
                          linear-gradient(-45deg, transparent 75px, transparent 76px, ${bg} 76px, ${lines} 77px, transparent 78px, transparent 109px)`,
        backgroundSize: `109px 109px, 109px 109px,100% 6px, 109px 109px`,
        backgroundPosition: `54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px`,
      }}
    />
  );
}

const Dots = ({ dark }: { dark?: boolean }) => {
  const radial = dark ? "rgba(61,61,61,0.87)" : "rgba(140,140,140,0.56)";
  const bg = dark ? "#0a0a0a" : "#ffffff";

  return (
    <div
      className="absolute inset-0 h-full w-full select-none"
      style={{
        backgroundColor: bg,
        backgroundImage: `radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%)`,
        backgroundSize: "100px 100px",
      }}
    />
  );
};

const OgBackground = ({
  dark,
  gradient,
  style,
}: {
  dark?: boolean;
  gradient?: string;
  style?: "rings" | "dots" | "grid";
}) => {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full select-none"
      style={gradient ? { backgroundImage: decodeURIComponent(gradient) } : {}}
    >
      {style === "rings" ? <Rings dark={dark} /> : null}
      {style === "grid" ? <Grid dark={dark} /> : null}
      {style === "dots" ? <Dots dark={dark} /> : null}
    </div>
  );
};

export const OgImage: FC<OgImageProps> = () => {
  const router = useRouter();
  const {
    dark,
    gradient,
    style,
    content = "",
    fontSize = "140px",
    color = dark ? "#fff" : "#000",
    img = "",
    imgSize = "180px",
  } = router.query as NodeJS.Dict<string>;

  return (
    <div className="relative flex h-screen max-h-[1170px] max-w-[2048px] flex-col items-center justify-center gap-6">
      {img
        ? <picture className="relative mx-auto -mt-1 flex max-w-6xl items-center justify-center">
            <Image src={decodeURIComponent(img)} width={imgSize} height={imgSize} alt={content} />
          </picture>
        : null}
      <article
        className="relative mx-auto flex max-w-6xl items-center justify-center text-center"
        style={{ fontSize, color }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(content)) }}
      />
      <OgBackground dark={!!dark} gradient={gradient} style={style as "rings" | "dots" | "grid"} />
    </div>
  );
};

export default OgImage;
