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
import { HABITS, HabitStep, HabitStepState } from "content/habits";

import { Dispatch, FC, useCallback, useEffect, useState } from "react";

type indexProps = {};

const Index: FC<indexProps> = ({}) => {
  const title = "Full-Stack Developer";
  const subtitle = "Tracking Habits daily to analyze different correlations and measure success.";
  const {
    steps: habits,
    selectStep,
    dispatch,
  } = useProgressSteps<HabitStep, HabitReducerActions>(habitInitializer(HABITS), habitReducer);
  const [currentDate, setCurrentDate] = useState<string>("");
  const hello = API.useQuery(["hello", { text: "client" }]);

  const handleSelectDay = useCallback((date) => setCurrentDate(date), []);

  useEffect(() => {
    if (window) {
      setCurrentDate(new Date().toISOString().split("T")[0]);
    }
  }, []);

  return (
    <HabitPage
      subtitle={subtitle}
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
                last={habits.length - 1 === index}
                selected={step.selected}
                title={step.title}
                onClick={() => selectStep(index, true)}
              />
            ))}
          </ProgressSteps>
        </div>
        <div className="flex-1 right ">
          <div className="relative shadow sm:rounded-md">
            <div className="flex relative z-0 flex-col gap-2 py-5 px-4 space-y-6 min-h-[400px] bg-white sm:p-6">
              <HabitBlocks
                dispatch={dispatch as Dispatch<HabitReducerActions>}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
              <HabitSections
                dispatch={dispatch as Dispatch<HabitReducerActions>}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
            </div>
            <div className="relative z-20 px-4 pb-5 mt-auto bg-white">
              <HabitAddSections
                dispatch={dispatch as Dispatch<HabitReducerActions>}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
            </div>
          </div>
        </div>
      </div>
    </HabitPage>
  );
};

export default Index;
