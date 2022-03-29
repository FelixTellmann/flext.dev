import { habitReducer, HabitReducerActions } from "_client/habits/_habit-reducer";
import { habitInitializer } from "_client/habits/_helpers";
import { HabitAddSections } from "_client/habits/habit-add-sections";
import { HabitBlocks } from "_client/habits/habit-blocks";
import { HabitPage } from "_client/habits/habit-page";
import { HabitSections } from "_client/habits/habit-sections";
import { API, useMutation, useQuery } from "_client/hooks/_useTRPC";
import { ProgressCalendar } from "_client/progress-calendar/progress-calendar";
import { ProgressButton } from "_client/progress-steps/progress-button";
import { ProgressSteps } from "_client/progress-steps/progress-steps";
import { useProgressSteps } from "_client/progress-steps/useProgressSteps";
import { useDebouncedEffect } from "_client/utils/debounce";
import { HABITS, HabitStep, HabitStepState } from "content/habits";
import deepEqual from "fast-deep-equal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import superjson from "superjson";

import { Dispatch, FC, useCallback, useEffect, useState } from "react";

type indexProps = {};

const Daily: FC<indexProps> = ({}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const {
    steps: habits,
    selectStep,
    dispatch: stepDispatch,
    selectedIndex,
  } = useProgressSteps<HabitStep, HabitReducerActions>(habitInitializer(HABITS), habitReducer);

  const dispatch = stepDispatch as Dispatch<HabitReducerActions>;
  const [currentDate, setCurrentDate] = useState<string>("");
  const saveData = useMutation(["habits.save"]);
  const { data } = useQuery(["habits.findUnique", { id: currentDate }], {
    enabled: !!currentDate,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
  });

  const handleSelectDay = useCallback((date) => setCurrentDate(date), []);

  useEffect(() => {
    if (window) {
      setCurrentDate(new Date().toISOString().split("T")[0]);
    }
  }, []);

  useDebouncedEffect(
    () => {
      if (!deepEqual(habitInitializer(HABITS), habits)) {
        saveData.mutate({
          id: currentDate,
          data: superjson.stringify(habits),
          level: habits.reduce(
            (acc, { completed }) => {
              if (!completed) return acc;
              return (acc += 1);
            },
            0
          ),
        });
      }
    },
    2000,
    [currentDate, habits]
  );

  useEffect(() => {
    dispatch({
      type: "LOAD_HABITS",
      payload: { habits: data?.data ?? superjson.stringify(habitInitializer(HABITS)) },
    });
  }, [data, dispatch]);

  useEffect(() => {
    if (!session && status !== "loading" && router.isReady) {
      router.push("/auth/sign-in");
    }
  }, [router, session, status]);

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
      <div className="mt-12 flex flex-col gap-10 pb-36 md:flex-row">
        <div className="left sticky order-2 flex flex-1 justify-center pt-12 md:order-1">
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
                onClick={() => selectStep(index, true)}
              />
            ))}
          </ProgressSteps>
        </div>
        <div className="right order-1 flex-1 md:order-2">
          <div className="relative shadow sm:rounded-md">
            <div className="relative flex min-h-[400px] flex-col gap-2 space-y-6 bg-white py-5 px-4 sm:p-6">
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
            <div className="relative z-20 mt-auto bg-white px-4 pb-5">
              <HabitAddSections
                dispatch={dispatch}
                habit={habits.find(({ selected }) => selected) as HabitStepState}
                index={habits.findIndex(({ selected }) => selected)}
              />
            </div>
          </div>
          <div className="mt-6 mb-4 flex justify-end gap-6">
            {selectedIndex > 0
              ? <button
                  className="rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm shadow-sm h:drop-shadow-xl a:drop-shadow-sm"
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
                  className="rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm shadow-sm h:drop-shadow-xl a:drop-shadow-sm"
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
                  className="rounded-lg border border-gray-200 bg-cyan-400 py-2 px-4 text-sm shadow-sm h:drop-shadow-xl a:drop-shadow-sm"
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

export default Daily;
