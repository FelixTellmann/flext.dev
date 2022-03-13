import { useCallback, useEffect, useState } from "react";

export type ProcessStep = {
  completed: boolean;
  selected: boolean;
  title: string;
  description?: string;
};

type UseProgressStepsHook = (steps: ProcessStep[]) => [ProcessStep[], any];

export const useProgressSteps: UseProgressStepsHook = (initialSteps) => {
  const [steps, setSteps] = useState(initialSteps);

  const selectProcessStep = useCallback((index: number, selectAny = false) => {
    if (selectAny) {
      setSteps((steps) => {
        if (steps[index].selected) return steps;
        return steps.map((step, i) => {
          step.selected = i === index;
          return step;
        });
      });
    }

    if (!selectAny) {
      setSteps((steps) => {
        if (steps[index].selected) return steps;

        for (let i = 0; i < steps.length; i++) {
          steps[i].selected = true;

          if (i === index) {
            return steps.map((step, j) => {
              step.selected = i === j;
              return step;
            });
          }

          if (steps[i].completed) {
            steps[i].selected = false;
            continue;
          }
          return steps.map((step, j) => {
            step.selected = i === j;
            return step;
          });
        }

        steps[steps.length - 1].selected = true;

        return steps.map((step, j) => {
          step.selected = j === steps.length - 1;
          return step;
        });
      });
    }
  }, []);

  const selectInitialStep = useCallback(() => {
    setSteps((steps) => {
      if (steps.some((step) => step.selected)) return steps;

      for (let i = 0; i < steps.length; i++) {
        steps[i].selected = true;
        if (steps[i].completed) {
          steps[i].selected = false;
          continue;
        }
        return steps.map((step, j) => {
          step.selected = i === j;
          return step;
        });
      }
      steps[steps.length - 1].selected = true;

      return steps.map((step, j) => {
        step.selected = j === steps.length - 1;
        return step;
      });
    });
  }, []);

  useEffect(() => {
    selectInitialStep();
  }, [selectInitialStep]);

  return [steps, selectProcessStep];
};

export default useProgressSteps;
