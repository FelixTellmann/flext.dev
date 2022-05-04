import { RadioGroup } from "@headlessui/react";
import { MemoryGame } from "_client/memory/memory-game";
import { MemoryRadio } from "_client/memory/memory-radio";
import { FC, useState } from "react";

type MemoryProps = {};

export const MemorySettings: FC<MemoryProps> = (props) => {
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
    <section className="flex h-[calc(100vh-80px)] flex-col items-center justify-center ">
      <header className="pb-12">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-dark-headings">memory</h1>
      </header>
      <main className="flex w-full max-w-2xl flex-col gap-8 bg-slate-200 px-12 py-10 dark:bg-dark-card sm:rounded-2xl">
        <RadioGroup value={theme} onChange={setTheme} className=" text-lg font-bold">
          <RadioGroup.Label as="button" className="mb-4 text-xl dark:text-dark-headings">
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
          <RadioGroup.Label as="button" className="mb-4 text-xl dark:text-dark-headings">
            Numbers of Players
          </RadioGroup.Label>
          <div className="flex justify-between gap-3">
            <MemoryRadio value={1} />
            <MemoryRadio value={2} disabled />
            <MemoryRadio value={3} disabled />
            <MemoryRadio value={4} disabled />
          </div>
        </RadioGroup>{" "}
        <RadioGroup value={size} onChange={setSize} className=" text-lg font-bold">
          <RadioGroup.Label as="button" className="mb-4 text-xl dark:text-dark-headings">
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
