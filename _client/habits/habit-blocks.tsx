import { HabitNumber } from "_client/habits/_habit-number";
import { HabitSwitch } from "_client/habits/_habit-switch";
import { HabitBlock, HABITS, HabitStep, HabitStepState } from "content/habits";
import { FC, useReducer } from "react";

type HabitBlocksProps = {};

type HabitReducerActions =
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

const habitReducer = (habits: HabitStepState[], action: HabitReducerActions): HabitStepState[] => {
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

function getBlockDefault(block: HabitBlock): HabitBlock["value"] {
  switch (block.type) {
    case "header":
      return block.default ?? "";
    case "checkbox":
      return block.default ?? false;
    case "switch":
      return block.default ?? false;
    case "radio":
      return block.default ?? block.options.at(0)?.value;
    case "number":
      return block.default ?? "0";
    case "range":
      return block.default;
    case "select":
      return block.default ?? block.options.at(0)?.value;
    case "text":
      return block.default ?? "";
    case "textarea":
      return block.default ?? "";
    case "richtext":
      return block.default ?? "";
    case "datetime":
      return block.default ?? new Date(0);
    case "paragraph":
      return block.default ?? "";
  }
}

function habitInitializer(HABITS: HabitStep[]): HabitStepState[] {
  /* @ts-ignore */
  return HABITS.map((habit) => ({
    ...habit,
    blocks: habit.blocks
      ? habit.blocks.map((block) => ({ ...block, value: getBlockDefault(block) }))
      : [],
    sections: habit.sections
      ? habit.sections.map((section) => ({
          ...section,
          blocks: section.blocks.map((block) => ({ ...block, value: getBlockDefault(block) })),
        }))
      : [],
  }));
}

export const HabitBlocks: FC<HabitBlocksProps> = ({}) => {
  const initialHabits = habitInitializer(HABITS);
  const [habits, dispatch] = useReducer(habitReducer, initialHabits);

  return (
    <>
      {habits[0].blocks?.map((block, blockIndex) => {
        switch (block.type) {
          case "header": {
            return <div>header</div>;
          }
          case "checkbox": {
            return <div>checkbox</div>;
          }
          case "switch": {
            return (
              <HabitSwitch
                key={habits[0].title + block.id}
                id={block.id}
                info={block.info}
                label={block.label}
                setValue={() =>
                  dispatch({ type: "TOGGLE_SWITCH", payload: { habitIndex: 0, blockIndex } })
                }
                value={block.value}
              />
            );
          }
          case "radio": {
            return <div>radio</div>;
          }
          case "number": {
            return (
              <HabitNumber
                key={habits[0].title + block.id}
                setValue={(value) =>
                  dispatch({ type: "SET_VALUE", payload: { habitIndex: 0, blockIndex, value } })
                }
                {...block}
              />
            );
          }
          case "range": {
            return <div>range</div>;
          }
          case "select": {
            return <div>select</div>;
          }
          case "text": {
            return <div>text</div>;
          }
          case "textarea": {
            return <div>textarea</div>;
          }
          case "richtext": {
            return <div>richtext</div>;
          }
          case "datetime": {
            return <div>datetime</div>;
          }
          case "paragraph": {
            return <div>paragraph</div>;
          }
        }
      })}
    </>
  );
};
