import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { FC, useCallback, useState } from "react";

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
  const [size, setSize] = useState<"4x4" | "6x6" | "8x8" | "10x10" | "12x12">("4x4");

  if (isPlaying) {
    return <MemoryGame size={size} theme={theme} players={players} />;
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
            <MemoryRadio value="10x10" />
            <MemoryRadio value="12x12" />
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

const createGrid = (size: string, theme: string) => {
  const [rows, cols] = size.split("x").map((x) => new Array(+x).fill(theme));
  console.log([rows, cols]);
  const grid: never[] = [];
  return grid;
};

export const MemoryGame = ({
  players,
  size,
  theme,
}: {
  players: 1 | 2 | 3 | 4;
  size: "4x4" | "6x6" | "8x8" | "10x10" | "12x12";
  theme: "numbers" | "colors" | "alphabet" | "icons";
}) => {
  const [moves, setMoves] = useState();
  const [grid, setGrid] = useState(createGrid(size, theme));

  return (
    <>
      <section className="flex h-screen w-screen flex-col items-center bg-slate-100">
        <header className="mt-14 mb-6 flex w-full max-w-7xl items-center">
          <h1 className="text-4xl font-bold text-slate-900">memory</h1>
          <div className="ml-auto flex items-center gap-4">
            <button className="rounded-full bg-orange-400 px-6 py-2 text-xl font-bold text-slate-900 hfa:bg-orange-300">
              Restart
            </button>
            <button className="rounded-full bg-slate-300 px-6 py-2 text-xl font-bold text-slate-900 hfa:bg-slate-300/60">
              New Game
            </button>
          </div>
        </header>
        <main className="grid" style={{ gridTemplateColumns: `repeat(4, 1fr)` }}>
          grid
        </main>
        <footer>asd</footer>
      </section>
    </>
  );
};
