import { Counter } from "_client/memory/counter";
import { createGrid } from "_client/memory/create-grid";
import { createGridOptions } from "_client/memory/create-grid-options";
import { getGridSize } from "_client/memory/get-grid-size";
import { themify } from "_client/memory/themify";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

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
  const initialGrid = createGrid(size);
  const [grid, setGrid] = useState(initialGrid);
  const [startTime, setStartTime] = useState(Date.now());
  const [gridOptions, setGridOptions] = useState(createGridOptions(initialGrid));
  const [selection, setSelection] = useState<{ aIndex?: string; bIndex?: string }>({
    aIndex: undefined,
    bIndex: undefined,
  });

  const select = useCallback((index: number) => {
    console.log(index);
    setGridOptions((grid) => {
      grid[index].reveals = grid[index].reveals + 1;
      console.log(grid[index].reveals);
      return [...grid];
    });
    setSelection(({ aIndex, bIndex }) => {
      if (!aIndex || (aIndex && bIndex)) {
        setMoveCount((num) => (num += 1));
        setPlayerMoveCounts((arr) =>
          arr.map((num, index) => (activePlayer === index ? (num += 1) : num))
        );
        return { aIndex: `${index}`, bIndex: undefined };
      }
      if (!bIndex) {
        if (grid[+aIndex] === grid[index]) {
          setGridOptions((grid) => {
            grid[+aIndex] = { ...grid[+aIndex], solved: true };
            grid[index] = { ...grid[index], solved: true };
            return [...grid];
          });
          return { aIndex: undefined, bIndex: undefined };
        }
        return { aIndex, bIndex: `${index}` };
      }
      return { aIndex: undefined, bIndex: undefined };
    });
  }, [activePlayer, grid]);

  const resetGame = useCallback(() => {
    const newGrid = createGrid(size);
    setGrid(newGrid);
    setGridOptions(createGridOptions(newGrid));
    setStartTime(Date.now());
    setMoveCount(0);
    setSelection({
      aIndex: undefined,
      bIndex: undefined,
    });
  }, [size]);

  useEffect(() => {
    setGridOptions((grid) => {
      const newGrid = grid.map((r) => ({ ...r, selected: false }));
      if (selection.aIndex) {
        const index = +selection.aIndex;
        newGrid[index] = {
          ...newGrid[index],
          selected: true,
        };
      }

      if (selection.bIndex) {
        const index = +selection.bIndex;
        newGrid[index] = { ...newGrid[index], selected: true };
      }

      return [...newGrid];
    });
  }, [selection]);

  return (
    <section className="relative flex h-[calc(100vh-80px)] flex-col items-center justify-between ">
      <header className="mt-8 mb-6 flex w-full max-w-7xl items-center px-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-dark-headings sm:text-4xl">
          memory
        </h1>
        <div className="ml-auto flex items-center gap-4">
          <button
            className="whitespace-nowrap rounded-full  bg-orange-400 px-3 py-1 font-bold text-slate-900 hfa:bg-orange-300 sm:px-6 sm:py-2  sm:text-xl"
            onClick={resetGame}
          >
            Restart
          </button>
          <button
            className="whitespace-nowrap rounded-full bg-slate-300 px-3 py-1 font-bold text-slate-900 hfa:bg-slate-300/60 sm:px-6 sm:py-2 sm:text-xl"
            onClick={() => newGame()}
          >
            New Game
          </button>
        </div>
      </header>
      <main
        className={clsx(
          "grid gap-2 px-4 pb-4 sm:gap-4",
          size === "4x4" && "grid-cols-4",
          size === "6x6" && "grid-cols-6",
          size === "8x8" && "grid-cols-8"
        )}
      >
        {grid.map((value, index) => (
          <button
            key={`${value}${index}`}
            className={clsx(
              "overflow-hidden rounded-full bg-slate-600 text-3xl font-bold uppercase",
              getGridSize(size)
            )}
            onClick={() => select(index)}
            disabled={gridOptions[index].selected || gridOptions[index].solved}
          >
            <div
              className={clsx(
                "pointer-events-none flex h-full w-full select-none items-center justify-center bg-orange-400 opacity-0 transition-all duration-75",
                gridOptions[index].selected && !gridOptions[index].solved && "!opacity-100",
                gridOptions[index].solved && "!bg-green-400 !opacity-100"
              )}
            >
              {themify(value, theme)}
            </div>
          </button>
        ))}
      </main>
      <footer className="mb-14 mt-4 flex flex-col gap-2 sm:flex-row sm:gap-8">
        <div className="flex w-[200px] items-center justify-between gap-3 rounded-md bg-slate-300 p-3">
          <span className="font-bold text-slate-500">Time</span>
          <span className="text-2xl font-bold text-slate-700">
            <Counter startTime={startTime} stopCounter={gridOptions.every((item) => item.solved)} />
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
          gridOptions.every((item) => item.solved) && "!pointer-events-auto !opacity-100"
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
                stopCounter={gridOptions.every((item) => item.solved)}
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
              {gridOptions.reduce(
                (acc, { reveals, pairIndex }) => {
                  if (reveals + gridOptions[pairIndex].reveals <= 3) {
                    acc += 1;
                  }
                  return acc;
                },
                0
              ) / 2}{" "}
              / {gridOptions.length / 2} First strikes
            </span>
          </div>
          <footer className="flex gap-4 pt-8">
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
