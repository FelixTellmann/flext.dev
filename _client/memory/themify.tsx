import { GiCardAceHearts, GiConsoleController, GiDuck, GiGalleon, GiHeartPlus, GiHemp, GiJigsawPiece, GiMaterialsScience, GiMineWagon, GiModernCity, GiMusicalNotes, GiPartyPopper, GiPin, GiPizzaSlice, GiPropellerBeanie, GiRadarDish, GiRotaryPhone, GiScorpion, GiShamrock, GiShinyApple, GiSpades, GiSteam, GiSteeringWheel, GiStopwatch, GiTinker, GiTopHat, GiTowerFlag, GiTrophyCup, GiUmbrella, GiUnicorn, GiUnlitBomb, GiYinYang } from "react-icons/gi";

export const themify = (key: number, theme: "numbers" | "colors" | "alphabet" | "icons") => {
  switch (theme) {
    case "numbers":
      return <div className="text-white">{key + 1}</div>;
    case "colors":
      switch (key) {
        case 0: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ff1493" }} />;
        }
        case 1: {
          return <div className="h-full w-full" style={{ backgroundColor: "#0000ff" }} />;
        }
        case 2: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ffff00" }} />;
        }
        case 3: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ff4500" }} />;
        }
        case 4: {
          return <div className="h-full w-full" style={{ backgroundColor: "#008000" }} />;
        }
        case 5: {
          return <div className="h-full w-full" style={{ backgroundColor: "#00ffff" }} />;
        }
        case 6: {
          return <div className="h-full w-full" style={{ backgroundColor: "#dc143c" }} />;
        }
        case 7: {
          return <div className="h-full w-full" style={{ backgroundColor: "#8b008b" }} />;
        }
        case 8: {
          return <div className="h-full w-full" style={{ backgroundColor: "#7cfc00" }} />;
        }
        case 9: {
          return <div className="h-full w-full" style={{ backgroundColor: "#f0e68c" }} />;
        }
        case 10: {
          return <div className="h-full w-full" style={{ backgroundColor: "#da70d6" }} />;
        }
        case 11: {
          return <div className="h-full w-full" style={{ backgroundColor: "#008b8b" }} />;
        }
        case 12: {
          return <div className="h-full w-full" style={{ backgroundColor: "#808000" }} />;
        }
        case 13: {
          return <div className="h-full w-full" style={{ backgroundColor: "#a0522d" }} />;
        }
        case 14: {
          return <div className="h-full w-full" style={{ backgroundColor: "#696969" }} />;
        }
        case 15: {
          return <div className="h-full w-full" style={{ backgroundColor: "#7b68ee" }} />;
        }
        case 16: {
          return <div className="h-full w-full" style={{ backgroundColor: "#b03060" }} />;
        }
        case 17: {
          return <div className="h-full w-full" style={{ backgroundColor: "#000080" }} />;
        }
        case 18: {
          return <div className="h-full w-full" style={{ backgroundColor: "#f08080" }} />;
        }
        case 19: {
          return <div className="h-full w-full" style={{ backgroundColor: "#90ee90" }} />;
        }
        case 20: {
          return <div className="h-full w-full" style={{ backgroundColor: "#87ceeb" }} />;
        }
        case 21: {
          return <div className="h-full w-full" style={{ backgroundColor: "#00ff7f" }} />;
        }
        case 22: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ffa500" }} />;
        }
        case 23: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ededed" }} />;
        }
        case 24: {
          return <div className="h-full w-full" style={{ backgroundColor: "#010101" }} />;
        }
        case 25: {
          return <div className="h-full w-full" style={{ backgroundColor: "#d8bfd8" }} />;
        }
        case 26: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ff00ff" }} />;
        }
        case 27: {
          return <div className="h-full w-full" style={{ backgroundColor: "#9400d3" }} />;
        }
        case 28: {
          return <div className="h-full w-full" style={{ backgroundColor: "#483d8b" }} />;
        }
        case 29: {
          return <div className="h-full w-full" style={{ backgroundColor: "#1e90ff" }} />;
        }
        case 30: {
          return <div className="h-full w-full" style={{ backgroundColor: "#f4a460" }} />;
        }
        case 31: {
          return <div className="h-full w-full" style={{ backgroundColor: "#ff0015" }} />;
        }
      }
      return "";
    case "icons":
      switch (key) {
        case 0: {
          return <GiCardAceHearts className="text-white" />;
        }
        case 1: {
          return <GiConsoleController className="text-white" />;
        }
        case 2: {
          return <GiDuck className="text-white" />;
        }
        case 3: {
          return <GiGalleon className="text-white" />;
        }
        case 4: {
          return <GiHeartPlus className="text-white" />;
        }
        case 5: {
          return <GiJigsawPiece className="text-white" />;
        }
        case 6: {
          return <GiMaterialsScience className="text-white" />;
        }
        case 7: {
          return <GiModernCity className="text-white" />;
        }
        case 8: {
          return <GiMusicalNotes className="text-white" />;
        }
        case 9: {
          return <GiPartyPopper className="text-white" />;
        }
        case 10: {
          return <GiRadarDish className="text-white" />;
        }
        case 11: {
          return <GiShamrock className="text-white" />;
        }
        case 12: {
          return <GiSteam className="text-white" />;
        }
        case 13: {
          return <GiSteeringWheel className="text-white" />;
        }
        case 14: {
          return <GiTinker className="text-white" />;
        }
        case 15: {
          return <GiTopHat className="text-white" />;
        }
        case 16: {
          return <GiPizzaSlice className="text-white" />;
        }
        case 17: {
          return <GiYinYang className="text-white" />;
        }
        case 18: {
          return <GiUmbrella className="text-white" />;
        }
        case 19: {
          return <GiUnicorn className="text-white" />;
        }
        case 20: {
          return <GiUnlitBomb className="text-white" />;
        }
        case 21: {
          return <GiTrophyCup className="text-white" />;
        }
        case 22: {
          return <GiTowerFlag className="text-white" />;
        }
        case 23: {
          return <GiStopwatch className="text-white" />;
        }
        case 24: {
          return <GiSpades className="text-white" />;
        }
        case 25: {
          return <GiShinyApple className="text-white" />;
        }
        case 26: {
          return <GiScorpion className="text-white" />;
        }
        case 27: {
          return <GiRotaryPhone className="text-white" />;
        }
        case 28: {
          return <GiPropellerBeanie className="text-white" />;
        }
        case 29: {
          return <GiPin className="text-white" />;
        }
        case 30: {
          return <GiMineWagon className="text-white" />;
        }
        case 31: {
          return <GiHemp className="text-white" />;
        }
      }
      return "";
    case "alphabet":
      switch (key) {
        case 0: {
          return <div className="text-white">a</div>;
        }
        case 1: {
          return <div className="text-white">b</div>;
        }
        case 2: {
          return <div className="text-white">c</div>;
        }
        case 3: {
          return <div className="text-white">d</div>;
        }
        case 4: {
          return <div className="text-white">e</div>;
        }
        case 5: {
          return <div className="text-white">f</div>;
        }
        case 6: {
          return <div className="text-white">g</div>;
        }
        case 7: {
          return <div className="text-white">h</div>;
        }
        case 8: {
          return <div className="text-white">i</div>;
        }
        case 9: {
          return <div className="text-white">j</div>;
        }
        case 10: {
          return <div className="text-white">k</div>;
        }
        case 11: {
          return <div className="text-white">l</div>;
        }
        case 12: {
          return <div className="text-white">m</div>;
        }
        case 13: {
          return <div className="text-white">n</div>;
        }
        case 14: {
          return <div className="text-white">o</div>;
        }
        case 15: {
          return <div className="text-white">p</div>;
        }
        case 16: {
          return <div className="text-white">q</div>;
        }
        case 17: {
          return <div className="text-white">r</div>;
        }
        case 18: {
          return <div className="text-white">s</div>;
        }
        case 19: {
          return <div className="text-white">t</div>;
        }
        case 20: {
          return <div className="text-white">u</div>;
        }
        case 21: {
          return <div className="text-white">v</div>;
        }
        case 22: {
          return <div className="text-white">w</div>;
        }
        case 23: {
          return <div className="text-white">x</div>;
        }
        case 24: {
          return <div className="text-white">y</div>;
        }
        case 25: {
          return <div className="text-white">z</div>;
        }
        case 26: {
          return <div className="text-white">@</div>;
        }
        case 27: {
          return <div className="text-white">#</div>;
        }
        case 28: {
          return <div className="text-white">$</div>;
        }
        case 29: {
          return <div className="text-white">%</div>;
        }
        case 30: {
          return <div className="text-white">=</div>;
        }
        case 31: {
          return <div className="text-white">?</div>;
        }
      }
      return "";
  }
};
