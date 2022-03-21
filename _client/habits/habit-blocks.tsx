import { HabitTimeSelector } from "_client/habits/_habit-time-selector";
import { HabitNumber } from "_client/habits/_habit-number";
import { HabitReducerActions } from "_client/habits/_habit-reducer";
import { HabitSwitch } from "_client/habits/_habit-switch";
import { HabitStepState } from "content/habits";
import { Dispatch, FC } from "react";

type HabitBlocksProps = {
  dispatch: Dispatch<HabitReducerActions>;
  index: number;
  habit?: HabitStepState;
};

export const HabitBlocks: FC<HabitBlocksProps> = ({ habit, index, dispatch }) => {
  return (
    <>
      {habit?.blocks?.map((block, blockIndex) => {
        switch (block.type) {
          case "header": {
            return <div key={habit.title}>header</div>;
          }
          case "checkbox": {
            return <div key={habit.title + block.id}>checkbox</div>;
          }
          case "switch": {
            return (
              <HabitSwitch
                key={habit.title + block.id}
                id={block.id}
                info={block.info}
                label={block.label}
                setValue={() =>
                  dispatch({ type: "TOGGLE_SWITCH", payload: { habitIndex: index, blockIndex } })
                }
                value={block.value}
              />
            );
          }
          case "radio": {
            return <div key={habit.title + block.id}>radio</div>;
          }
          case "number": {
            return (
              <HabitNumber
                key={habit.title + block.id}
                setValue={(value) =>
                  dispatch({ type: "SET_VALUE", payload: { habitIndex: index, blockIndex, value } })
                }
                {...block}
              />
            );
          }
          case "range": {
            return <div key={habit.title + block.id}>range</div>;
          }
          case "select": {
            return <div key={habit.title + block.id}>select</div>;
          }
          case "text": {
            return <div key={habit.title + block.id}>text</div>;
          }
          case "textarea": {
            return <div key={habit.title + block.id}>textarea</div>;
          }
          case "richtext": {
            return <div key={habit.title + block.id}>richtext</div>;
          }
          case "time": {
            return (
              <HabitTimeSelector
                key={habit.title + block.id}
                info={block.info}
                setValue={(value) =>
                  dispatch({ type: "SET_VALUE", payload: { habitIndex: index, blockIndex, value } })
                }
                {...block}
              />
            );
          }
          case "paragraph": {
            return <div key={habit.title}>paragraph</div>;
          }
        }
      })}
    </>
  );
};
