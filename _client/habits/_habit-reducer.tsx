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
    }
  | {
      payload: {
        blockIndex: number;
        habitIndex: number;
        sectionIndex: number;
      };
      type: "SECTION_BLOCK_TOGGLE_SWITCH";
    }
  | {
      payload: {
        blockIndex: number;
        habitIndex: number;
        sectionIndex: number;
        value: any;
      };
      type: "SECTION_BLOCK_SET_VALUE";
    }
  | {
      payload: {
        habitIndex: number;
        type: string;
      };
      type: "ADD_SECTION";
    }
  | {
      payload: {
        habitIndex: number;
      };
      type: "COMPLETE_HABIT";
    };

export const habitReducer = (
  initHabits: (ProcessStep & HabitStep)[],
  action: HabitReducerActions
): HabitStepState[] => {
  const habits = initHabits as (ProcessStep & {
    blocks: (HabitBlock & Required<Pick<HabitBlock, "value">>)[];
    sections: (Omit<HabitSection, "blocks"> & {
      blocks: (HabitBlock & Required<Pick<HabitBlock, "value">>)[];
    })[];
    sectionsAdded?: (Omit<HabitSection, "blocks"> & {
      blocks: (HabitBlock & Required<Pick<HabitBlock, "value">>)[];
    })[];
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
        };
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
              value: !block.value as any,
            };
          }),
        };
      });
    }

    case "SECTION_BLOCK_SET_VALUE": {
      const { blockIndex, habitIndex, sectionIndex, value } = payload;
      return habits.map((habit, i) => {
        if (i !== habitIndex) return habit;

        return {
          ...habit,
          sectionsAdded: habit.sectionsAdded?.map((sect, i) => {
            if (i !== sectionIndex) return sect;

            return {
              ...sect,
              blocks: sect.blocks.map((block, j) => {
                if (j !== blockIndex) return block;
                return {
                  ...block,
                  value,
                };
              }),
            };
          }),
        };
      });
    }

    case "SECTION_BLOCK_TOGGLE_SWITCH": {
      const { blockIndex, habitIndex, sectionIndex } = payload;
      return habits.map((habit, i) => {
        if (i !== habitIndex) return habit;

        return {
          ...habit,
          sectionsAdded: habit.sectionsAdded?.map((sect, i) => {
            if (i !== sectionIndex) return sect;

            return {
              ...sect,
              blocks: sect.blocks.map((block, j) => {
                if (j !== blockIndex) return block;
                return {
                  ...block,
                  value: !block.value as any,
                };
              }),
            };
          }),
        };
      });
    }

    case "ADD_SECTION": {
      const { habitIndex, type } = payload;

      return habits.map((habit, i) => {
        if (i !== habitIndex) return habit;

        const section = habit.sections.find((section) => section.type === type);

        if (section) {
          return {
            ...habit,
            sectionsAdded: [...(habit.sectionsAdded ?? []), section],
          };
        }

        return habit;
      });
    }

    case "COMPLETE_HABIT": {
      const { habitIndex } = payload;

      return habits.map((habit, i) => {
        if (i !== habitIndex) return habit;
        return { ...habit, completed: true };
      });
    }
  }
  // return habits;
};
