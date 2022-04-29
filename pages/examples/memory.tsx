import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
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
          acc[Math.floor(index / count)].push(num);
          return acc;
        }
        acc[Math.floor(index / count)] = [num];
        return acc;
      },
      [] as number[][]
    );
};
const createGridOptions = (
  size: `${number}x${number}`
): { reveals: number; selected: boolean; solved: boolean }[][] => {
  const count = parseInt(size.split("x")[0]);
  return [...Array.from(Array(count ** 2 / 2)), ...Array.from(Array(count ** 2 / 2))].reduce(
    (acc, num, index) => {
      if (Array.isArray(acc[Math.floor(index / count)])) {
        acc[Math.floor(index / count)].push({ solved: false, selected: false, reveals: 0 });
        return acc;
      }
      acc[Math.floor(index / count)] = [{ solved: false, selected: false, reveals: 0 }];
      return acc;
    },
    [] as { reveals: number; selected: boolean; solved: boolean }[][]
  );
};

function themify(key: number, theme: "numbers" | "colors" | "alphabet" | "icons") {
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
}

export const Counter: FC<{ startTime: number; stopCounter: boolean }> = ({
  startTime,
  stopCounter,
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const interval: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (!stopCounter) {
      setTimeElapsed(0);
      interval.current = setInterval(
        () => {
          setTimeElapsed(Date.now() - startTime);
        },
        1000
      );
    }
  }, [startTime, stopCounter]);

  return (
    <>
      {new Date(timeElapsed).toLocaleTimeString("en-GB", {
        minute: "2-digit",
        second: "2-digit",
      })}
    </>
  );
};

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
  const [moveCount, setMoveCount] = useState(0);
  const [playerMoveCounts, setPlayerMoveCounts] = useState([0, 0, 0, 0]);
  const [activePlayer, setActivePlayer] = useState(0);
  const [grid, setGrid] = useState(createGrid(size));
  const [startTime, setStartTime] = useState(Date.now());
  const [gridOptions, setGridOptions] = useState(createGridOptions(size));
  const [selection, setSelection] = useState<{ a?: [number, number]; b?: [number, number] }>({
    a: undefined,
    b: undefined,
  });

  const select = useCallback((x: number, y: number) => {
    setSelection(({ a, b }) => {
      if (!a || (a && b)) {
        setMoveCount((num) => (num += 1));
        setPlayerMoveCounts((arr) =>
          arr.map((num, index) => (activePlayer === index ? (num += 1) : num))
        );
        return { a: [x, y], b: undefined };
      }
      if (!b) {
        const [aX, aY] = a;
        if (grid[aX][aY] === grid[x][y]) {
          setGridOptions((grid) => {
            grid[aX][aY] = { ...grid[aX][aY], solved: true };
            grid[x][y] = { ...grid[x][y], solved: true };
            return [...grid];
          });
          return { a: undefined, b: undefined };
        }
        return { a, b: [x, y] };
      }
      return { a: undefined, b: undefined };
    });
  }, [activePlayer, grid]);

  const resetGame = useCallback(() => {
    setGrid(createGrid(size));
    setGridOptions(createGridOptions(size));
    setStartTime(Date.now());
    setMoveCount(0);
    setSelection({
      a: undefined,
      b: undefined,
    });
  }, [size]);

  useEffect(() => {
    setGridOptions((grid) => {
      const newGrid = grid.map((row) => row.map((r) => ({ ...r, selected: false })));
      if (selection.a) {
        const [x, y] = selection.a;
        newGrid[x][y] = {
          ...newGrid[x][y],
          selected: true,
          reveals: selection.b ? newGrid[x][y].reveals : newGrid[x][y].reveals + 1,
        };
      }

      if (selection.b) {
        const [x, y] = selection.b;
        newGrid[x][y] = { ...newGrid[x][y], selected: true, reveals: newGrid[x][y].reveals + 1 };
      }

      return [...newGrid];
    });
  }, [selection]);

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-between bg-slate-100">
      <header className="mt-14 mb-6 flex w-full max-w-7xl items-center px-4">
        <h1 className="text-4xl font-bold text-slate-900">memory</h1>
        <div className="ml-auto flex items-center gap-4">
          <button
            className="rounded-full bg-orange-400 px-6 py-2 text-xl font-bold text-slate-900 hfa:bg-orange-300"
            onClick={resetGame}
          >
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
        {grid.map((row, x) => (
          <div key={JSON.stringify(row) + x} className="flex gap-4">
            {row.map((key, y) => (
              <button
                key={`${key}-${y}`}
                className="overflow-hidden rounded-full bg-slate-600 text-3xl font-bold uppercase"
                style={{ width: getGridSize(size), height: getGridSize(size) }}
                onClick={() => select(x, y)}
                disabled={gridOptions[x][y].selected || gridOptions[x][y].solved}
              >
                <div
                  className={clsx(
                    "pointer-events-none flex h-full w-full select-none items-center justify-center bg-orange-400 opacity-0 transition-all duration-75",
                    gridOptions[x][y].selected && !gridOptions[x][y].solved && "!opacity-100",
                    gridOptions[x][y].solved && "!bg-green-400 !opacity-100"
                  )}
                >
                  {themify(key, theme)}
                </div>
              </button>
            ))}
          </div>
        ))}
      </main>
      <footer className="mb-14 flex gap-8">
        <div className="flex w-[200px] items-center justify-between gap-3 rounded-md bg-slate-300 p-3">
          <span className="font-bold text-slate-500">Time</span>
          <span className="text-2xl font-bold text-slate-700">
            <Counter
              startTime={startTime}
              stopCounter={gridOptions.every((row) => row.every((item) => item.solved))}
            />
          </span>
        </div>
        <div className="flex w-[200px] items-center justify-between gap-3 rounded-md bg-slate-300 p-3">
          <span className="font-bold text-slate-500">Moves</span>
          <span className="text-2xl font-bold text-slate-700">{moveCount}</span>
        </div>
      </footer>
      <div
        className={clsx(
          "pointer-events-none fixed inset-0 z-10 flex items-center justify-center bg-slate-700/50 opacity-0 backdrop-blur-sm transition-opacity",
          gridOptions.every((row) => row.every((item) => item.solved)) &&
            "!pointer-events-auto !opacity-100"
        )}
      >
        <section className="flex flex-col gap-10 rounded-3xl bg-slate-50 p-8 shadow-2xl">
          <header className="text-center">
            <h1 className="mt-4 mb-6 text-6xl font-extrabold text-slate-800">You did it!</h1>
            <p className="text-xl font-bold text-slate-500">Game over! Here's how you got on</p>
          </header>

          <div className="flex w-[600px] items-center justify-between gap-3 rounded-xl bg-slate-300 p-4">
            <span className="font-bold text-slate-500">Time Elapsed</span>
            <span className="text-2xl font-bold text-slate-700">
              <Counter
                startTime={startTime}
                stopCounter={gridOptions.every((row) => row.every((item) => item.solved))}
              />
            </span>
          </div>
          <div className="flex w-[600px] items-center justify-between gap-3 rounded-xl bg-slate-300 p-4">
            <span className="font-bold text-slate-500">Moves Taken</span>
            <span className="text-2xl font-bold text-slate-700">{moveCount} Moves</span>
          </div>
          <div className="flex w-[600px] items-center justify-between gap-3 rounded-xl bg-slate-300 p-4">
            <span className="font-bold text-slate-500">On First Reveal</span>
            <span className="text-2xl font-bold text-slate-700">
              getStrikes from Calculation in useEffect Strikes
            </span>
          </div>
          <footer className="flex gap-4 ">
            <button
              className="flex-1 rounded-full bg-orange-400 px-6 py-3 text-xl font-bold text-slate-900 hfa:bg-orange-300"
              onClick={resetGame}
            >
              Restart
            </button>
            <button
              className="flex-1 rounded-full bg-slate-300 px-6 py-3 text-xl font-bold text-slate-900 hfa:bg-slate-300/60"
              onClick={() => newGame()}
            >
              New Game
            </button>
          </footer>
        </section>
      </div>
    </section>
  );
};

function getGridSize(size: "4x4" | "6x6" | "8x8") {
  switch (size) {
    case "4x4": {
      return "100px";
    }
    case "6x6": {
      return "90px";
    }
    case "8x8": {
      return "75px";
    }
  }
}
