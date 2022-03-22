import useProgressSteps, { ProcessStep } from "_client/progress-steps/useProgressSteps";
import { HABITS, HabitStep } from "content/habits";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

type UseHabitsHook = (steps: HabitStep[]) => [HabitStep[], any];

export const useHabits: UseHabitsHook = (habits) => {
  const [steps, selectProcessStep] = useProgressSteps(habits);

  return [steps, "asd"];
};

export default useHabits;
