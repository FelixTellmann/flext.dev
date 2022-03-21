import { habitReducer, HabitReducerActions } from "_client/habits/_habit-reducer";
import { habitInitializer } from "_client/habits/_helpers";
import { HabitBlocks } from "_client/habits/habit-blocks";
import { API } from "_client/hooks/trcpAPI";
import { ProgressCalendar } from "_client/progress-calendar";
import { ProgressButton } from "_client/progress-steps/progress-button";
import { ProgressSteps } from "_client/progress-steps/progress-steps";
import useProgressSteps from "_client/progress-steps/useProgressSteps";
import { HABITS, HabitStep, HabitStepState } from "content/habits";
import { Dispatch, FC, useCallback, useReducer, useState } from "react";

type indexProps = {};

const Page: FC<{ subtitle: string; title: string }> = ({ title, subtitle, children }) => (
  <div className="min-h-[calc(100vh-66px)] bg-bg dark:bg-dark-bg">
    <div className="px-4 mx-auto max-w-[1024px]">
      <>
        <div className="pt-12 pb-5">
          <div className="sm:flex sm:justify-between sm:items-end">
            <div className="sm:flex-1 sm:w-0">
              <h1
                className="text-lg font-medium text-gray-900 dark:text-dark-headings"
                id="message-heading"
              >
                {title}
              </h1>
              <p className="overflow-hidden mt-1 text-sm text-gray-500 dark:text-dark-text overflow-ellipsis">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </>
      {children}
    </div>
  </div>
);

const Index: FC<indexProps> = ({}) => {
  const title = "Full-Stack Developer";
  const subtitle = "Tracking Habits daily to analyze different correlations and measure success.";
  const {
    steps: habits,
    selectStep,
    dispatch,
  } = useProgressSteps<HabitStep, HabitReducerActions>(habitInitializer(HABITS), habitReducer);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]);
  const hello = API.useQuery(["hello", { text: "client" }]);

  const handleSelectDay = useCallback((date) => setCurrentDate(date), []);

  return (
    <Page
      subtitle={subtitle}
      title={new Date(currentDate).toLocaleDateString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}
    >
      <ProgressCalendar handleSelectDay={handleSelectDay} />
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
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="flex flex-col gap-2 py-5 px-4 space-y-6 min-h-[500px] bg-white sm:p-6">
              <HabitBlocks
                dispatch={dispatch as Dispatch<HabitReducerActions>}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Index;
