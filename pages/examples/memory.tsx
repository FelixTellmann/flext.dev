import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { FC, useState } from "react";
import { GiCardAceHearts, GiConsoleController, GiDuck, GiGalleon, GiHeartPlus, GiHemp, GiJigsawPiece, GiMaterialsScience, GiMineWagon, GiModernCity, GiMusicalNotes, GiPartyPopper, GiPin, GiPizzaSlice, GiPropellerBeanie, GiRadarDish, GiRotaryPhone, GiScorpion, GiShamrock, GiShinyApple, GiSpades, GiSteam, GiSteeringWheel, GiStopwatch, GiTinker, GiTopHat, GiTowerFlag, GiTrophyCup, GiUmbrella, GiUnicorn, GiUnlitBomb, GiYinYang } from "react-icons/gi";

type MemoryProps = {};

function MemoryRadio({ value }: { value: string | number }) {
  return (
    <RadioGroup.Option value={value} className="flex flex-1">
      {({ checked }) => (
        <div
          className={clsx(
            "flex flex-1 cursor-pointer items-center justify-center rounded-full bg-slate-400/75 py-1.5 text-slate-50",
            checked && "bg-slate-600"
          )}
        >
          {value}
        </div>
      )}
    </RadioGroup.Option>
  );
}

export const Memory: FC<MemoryProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState<"numbers" | "colors" | "alphabet" | "icons">("numbers");
  const [players, setPlayers] = useState<1 | 2 | 3 | 4>(1);
  const [size, setSize] = useState<"4x4" | "6x6" | "8x8">("4x4");

  if (isPlaying) {
    return (
      <MemoryGame size={size} theme={theme} players={players} newGame={() => setIsPlaying(false)} />
    );
  }
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center bg-dark-bg">
      <header className="pb-12">
        <h1 className="text-5xl font-bold text-slate-100">memory</h1>
      </header>
      <main className="flex w-full max-w-2xl flex-col gap-8 bg-slate-200 px-12 py-10 sm:rounded-2xl">
        <RadioGroup value={theme} onChange={setTheme} className=" text-lg font-bold">
          <RadioGroup.Label as="button" className="mb-4 text-xl">
            Select Theme
          </RadioGroup.Label>
          <div className="flex justify-between gap-3">
            <MemoryRadio value="numbers" />
            <MemoryRadio value="colors" />
            <MemoryRadio value="alphabet" />
            <MemoryRadio value="icons" />
          </div>
        </RadioGroup>
        <RadioGroup value={players} onChange={setPlayers} className=" text-lg font-bold">
          <RadioGroup.Label as="button" className="mb-4 text-xl">
            Numbers of Players
          </RadioGroup.Label>
          <div className="flex justify-between gap-3">
            <MemoryRadio value={1} />
            <MemoryRadio value={2} />
            <MemoryRadio value={3} />
            <MemoryRadio value={4} />
          </div>
        </RadioGroup>{" "}
        <RadioGroup value={size} onChange={setSize} className=" text-lg font-bold">
          <RadioGroup.Label as="button" className="mb-4 text-xl">
            Grid Size
          </RadioGroup.Label>
          <div className="flex justify-between gap-3">
            <MemoryRadio value="4x4" />
            <MemoryRadio value="6x6" />
            <MemoryRadio value="8x8" />
          </div>
        </RadioGroup>
        <button
          className="mt-2 flex-1 rounded-full bg-orange-400 py-2 text-2xl font-bold text-slate-50"
          onClick={() => setIsPlaying(true)}
        >
          Start Game
        </button>
      </main>
    </section>
  );
};

export default Memory;

const createGrid = (size: `${number}x${number}`) => {
  const count = parseInt(size.split("x")[0]);
  return [...Array.from(Array(count ** 2 / 2).keys()), ...Array.from(Array(count ** 2 / 2).keys())]
    .sort(() => Math.random() - 0.5)
    .reduce(
      (acc, num, index) => {
        if (Array.isArray(acc[Math.floor(index / count)])) {
          acc[Math.floor(index / count)].push({ key: num, solved: false });
          return acc;
        }
        acc[Math.floor(index / count)] = [{ key: num, solved: false }];
        return acc;
      },
      [] as { key: number; solved: boolean }[][]
    );
};

function themify(key: number, theme: "numbers" | "colors" | "alphabet" | "icons") {
  switch (theme) {
    case "numbers":
      return <div className="text-white">{key + 1}</div>;
    case "colors":
      switch (key) {
        case 0: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 1: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 2: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 3: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 4: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 5: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 6: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 7: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 8: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 9: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 10: {
          return <div className="h-full w-full bg-red-300"></div>;
        }
        case 11: {
          return <div className="h-full w-full bg-red-300"></div>;
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
}

export const MemoryGame = ({
  players,
  size,
  theme,
  newGame,
}: {
  newGame: () => void;
  players: 1 | 2 | 3 | 4;
  size: "4x4" | "6x6" | "8x8";
  theme: "numbers" | "colors" | "alphabet" | "icons";
}) => {
  const [moves, setMoves] = useState();
  const [grid, setGrid] = useState(createGrid(size));

  console.log(grid);
  return (
    <section className="flex h-screen w-screen flex-col items-center bg-slate-100">
      <header className="mt-14 mb-6 flex w-full max-w-7xl items-center px-4">
        <h1 className="text-4xl font-bold text-slate-900">memory</h1>
        <div className="ml-auto flex items-center gap-4">
          <button className="rounded-full bg-orange-400 px-6 py-2 text-xl font-bold text-slate-900 hfa:bg-orange-300">
            Restart
          </button>
          <button
            className="rounded-full bg-slate-300 px-6 py-2 text-xl font-bold text-slate-900 hfa:bg-slate-300/60"
            onClick={() => newGame()}
          >
            New Game
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        {grid.map((row, index) => (
          <div key={JSON.stringify(row) + index} className="flex gap-4">
            {row.map(({ key, solved }, index) => (
              <button
                key={`${key}-${index}`}
                className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-slate-600 text-3xl font-bold uppercase"
              >
                <div className="pointer-events-none select-none opacity-100">
                  {themify(key, theme)}
                </div>
              </button>
            ))}
          </div>
        ))}
      </main>
      <footer>asd</footer>
    </section>
  );
};
