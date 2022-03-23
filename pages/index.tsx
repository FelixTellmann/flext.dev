import { habitReducer, HabitReducerActions } from "_client/habits/_habit-reducer";
import { habitInitializer } from "_client/habits/_helpers";
import { HabitAddSections } from "_client/habits/habit-add-sections";
import { HabitBlocks } from "_client/habits/habit-blocks";
import { HabitPage } from "_client/habits/habit-page";
import { HabitSections } from "_client/habits/habit-sections";
import { API } from "_client/hooks/trpcAPI";
import { ProgressCalendar } from "_client/progress-calendar";
import { ProgressButton } from "_client/progress-steps/progress-button";
import { ProgressSteps } from "_client/progress-steps/progress-steps";
import { useProgressSteps } from "_client/progress-steps/useProgressSteps";
import { useDebouncedEffect } from "_client/utils/debounce";
import { HABITS, HabitStep, HabitStepState } from "content/habits";

import { Dispatch, FC, useCallback, useEffect, useState } from "react";

type indexProps = {};

const Index: FC<indexProps> = ({}) => {
  const {
    steps: habits,
    selectStep,
    dispatch: stepDispatch,
    selectedIndex,
  } = useProgressSteps<HabitStep, HabitReducerActions>(habitInitializer(HABITS), habitReducer);
  const dispatch = stepDispatch as Dispatch<HabitReducerActions>;
  const [currentDate, setCurrentDate] = useState<string>("");
  const saveData = API.useMutation(["habits.save"]);
  const initialQuery = API.useQuery(["habits.findMany", { startsWith: "2022" }]);
  console.log(initialQuery);

  const handleSelectDay = useCallback((date) => setCurrentDate(date), []);

  useEffect(() => {
    if (window) {
      setCurrentDate(new Date().toISOString().split("T")[0]);
    }
  }, []);

  useDebouncedEffect(
    () => {
      console.log("habits have changed");
      saveData.mutate({
        id: currentDate,
        data: JSON.stringify(habits),
        level: habits.reduce(
          (acc, { completed }) => {
            if (!completed) return acc;
            return (acc += 1);
          },
          0
        ),
      });
    },
    2000,
    [currentDate, habits]
  );

  return (
    <HabitPage
      subtitle="Tracking Habits daily to analyze different correlations and measure success."
      title={
        currentDate
          ? new Date(currentDate).toLocaleDateString(undefined, {
              weekday: "long",
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : ""
      }
    >
      <ProgressCalendar handleSelectDay={handleSelectDay} selected={currentDate} />
      <div className="flex gap-10 pb-36 mt-12">
        <div className="flex sticky flex-1 justify-center pt-12 left">
          <ProgressSteps>
            {habits.map((step, index) => (
              <ProgressButton
                key={step.title}
                completed={step.completed}
                description={step.description}
                isLast={habits.length - 1 === index}
                name={step.title}
                nextCompleted={habits[index + 1]?.completed}
                nextSelected={habits[index + 1]?.selected}
                selected={step.selected}
                onClick={() => selectStep(index)}
              />
            ))}
          </ProgressSteps>
        </div>
        <div className="flex-1 right ">
          <div className="relative shadow sm:rounded-md">
            <div className="flex relative flex-col gap-2 py-5 px-4 space-y-6 min-h-[400px] bg-white sm:p-6">
              <HabitBlocks
                dispatch={dispatch}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
              <HabitSections
                dispatch={dispatch}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
            </div>
            <div className="relative z-20 px-4 pb-5 mt-auto bg-white">
              <HabitAddSections
                dispatch={dispatch}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
            </div>
          </div>
          <div className="flex gap-6 justify-end mt-6 mb-4">
            {selectedIndex > 0
              ? <button
                  className="py-2 px-4 text-sm bg-white rounded-lg border border-gray-200 shadow-sm h:drop-shadow-xl a:drop-shadow-sm"
                  type="button"
                  onClick={() => {
                    selectStep(Math.max(selectedIndex - 1, 0), true);
                  }}
                >
                  Previous
                </button>
              : null}
            {selectedIndex < habits.length - 1
              ? <button
                  className="py-2 px-4 text-sm bg-white rounded-lg border border-gray-200 shadow-sm h:drop-shadow-xl a:drop-shadow-sm"
                  type="button"
                  onClick={() => {
                    dispatch({ type: "COMPLETE_HABIT", payload: { habitIndex: selectedIndex } });
                    selectStep(Math.min(selectedIndex + 1, habits.length), true);
                  }}
                >
                  Next
                </button>
              : null}
            {selectedIndex === habits.length - 1
              ? <button
                  className="py-2 px-4 text-sm bg-cyan-400 rounded-lg border border-gray-200 shadow-sm h:drop-shadow-xl a:drop-shadow-sm"
                  type="button"
                  onClick={() => {
                    dispatch({ type: "COMPLETE_HABIT", payload: { habitIndex: selectedIndex } });
                  }}
                >
                  Done
                </button>
              : null}
          </div>
        </div>
      </div>
    </HabitPage>
  );
};

export default Index;
