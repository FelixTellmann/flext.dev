import { ProcessStep } from "_client/progress-steps/useProgressSteps";
import { HabitBlock, HabitSection, HabitStep, HabitStepState } from "content/habits";

export type HabitReducerActions =
  | {
      payload: {
        blockIndex: number;
        habitIndex: number;
      };
      type: "TOGGLE_SWITCH";
    }
  | {
      payload: {
        blockIndex: number;
        habitIndex: number;
        value: any;
      };
      type: "SET_VALUE";
    };

export const habitReducer = (
  initHabits: (ProcessStep & HabitStep)[],
  action: HabitReducerActions
): HabitStepState[] => {
  const habits = initHabits as (ProcessStep & {
    blocks: (HabitBlock & Required<Pick<HabitBlock, "value">>)[];
    sections: HabitSection[];
  })[];
  const { type, payload } = action;
  switch (type) {
    case "SET_VALUE": {
      const { blockIndex, habitIndex, value } = payload;
      return habits.map((habit, i) => {
        if (i !== habitIndex) return habit;

        return {
          ...habit,
          blocks: habit.blocks.map((block, j) => {
            if (j !== blockIndex) return block;
            return {
              ...block,
              value,
            };
          }),
        } as HabitStepState;
      });
    }
    case "TOGGLE_SWITCH": {
      const { blockIndex, habitIndex } = payload;
      return habits.map((habit, i) => {
        if (i !== habitIndex) return habit;

        return {
          ...habit,
          blocks: habit.blocks.map((block, j) => {
            if (j !== blockIndex) return block;
            return {
              ...block,
              value: !block.value,
            };
          }),
        } as HabitStepState;
      });
    }
  }
  // return habits;
};
