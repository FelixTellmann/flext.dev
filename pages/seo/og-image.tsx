import clsx from "clsx";
import { useRouter } from "next/router";
import { FC } from "react";

type OgImageProps = {};

export const OgImage: FC<OgImageProps> = () => {
  const router = useRouter();
  const { theme = "light", bg = "dots" } = router.query;
  const radial = theme === "dark" ? "dimgray" : "lightgray";

  return (
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
          {" "}
          <h1 className="text-[70px] font-bold uppercase tracking-wider">Hello</h1>
        </div>
      </div>
    </>
  );
};

export default OgImage;
