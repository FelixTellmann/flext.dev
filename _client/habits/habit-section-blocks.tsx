import { HabitRangeSlider } from "_client/habits/_habit-range-slider";
import { HabitRichtext } from "_client/habits/_habit-richtext";
import HabitSelect from "_client/habits/_habit-select";
import { HabitTimeSelector } from "_client/habits/_habit-time-selector";
import { HabitNumber } from "_client/habits/_habit-number";
import { HabitReducerActions } from "_client/habits/_habit-reducer";
import { HabitSwitch } from "_client/habits/_habit-switch";
import { HabitBlock, HabitSection, HabitStepState } from "content/habits";
import { Dispatch, FC } from "react";

type HabitSectionBlocksProps = {
  dispatch: Dispatch<HabitReducerActions>;
  habitIndex: number;
  sectionIndex: number;
  section?: Omit<HabitSection, "blocks"> & {
    blocks: (HabitBlock & Required<Pick<HabitBlock, "value">>)[];
  };
};

export const HabitSectionBlocks: FC<HabitSectionBlocksProps> = ({
  section,
  habitIndex,
  sectionIndex,
  dispatch,
}) => {
  return (
    <>
      {section?.blocks?.map((block, blockIndex) => {
        switch (block.type) {
          case "header": {
            return <div key={section.label}>header</div>;
          }
          case "checkbox": {
            return <div key={section.label + block.id}>checkbox</div>;
          }
          case "switch": {
            return (
              <HabitSwitch
                key={section.label + block.id}
                id={block.id}
                info={block.info}
                label={block.label}
                setValue={() =>
                  dispatch({
                    type: "SECTION_BLOCK_TOGGLE_SWITCH",
                    payload: { habitIndex: habitIndex, blockIndex, sectionIndex },
                  })
                }
                value={block.value}
              />
            );
          }
          case "radio": {
            return <div key={section.label + block.id}>radio</div>;
          }
          case "number": {
            return (
              <HabitNumber
                key={section.label + block.id}
                setValue={(value) =>
                  dispatch({
                    type: "SECTION_BLOCK_SET_VALUE",
                    payload: { habitIndex: habitIndex, blockIndex, value, sectionIndex },
                  })
                }
                {...block}
              />
            );
          }
          case "range": {
            return (
              <HabitRangeSlider
                key={section.label + block.id}
                info={block.info}
                setValue={(value) =>
                  dispatch({
                    type: "SECTION_BLOCK_SET_VALUE",
                    payload: { habitIndex: habitIndex, blockIndex, value, sectionIndex },
                  })
                }
                {...block}
              />
            );
          }
          case "select": {
            return (
              <HabitSelect
                key={section.label + block.id}
                info={block.info}
                setValue={(value) =>
                  dispatch({
                    type: "SECTION_BLOCK_SET_VALUE",
                    payload: { habitIndex: habitIndex, blockIndex, value, sectionIndex },
                  })
                }
                {...block}
              />
            );
          }
          case "text": {
            return <div key={section.label + block.id}>text</div>;
          }
          case "textarea": {
            return <div key={section.label + block.id}>textarea</div>;
          }
          case "richtext": {
            return (
              <HabitRichtext
                key={section.label + block.id}
                info={block.info}
                setValue={(value) =>
                  dispatch({
                    type: "SECTION_BLOCK_SET_VALUE",
                    payload: { habitIndex: habitIndex, blockIndex, value, sectionIndex },
                  })
                }
                {...block}
              />
            );
          }
          case "time": {
            return (
              <HabitTimeSelector
                key={section.label + block.id}
                info={block.info}
                setValue={(value) =>
                  dispatch({
                    type: "SECTION_BLOCK_SET_VALUE",
                    payload: { habitIndex: habitIndex, blockIndex, value, sectionIndex },
                  })
                }
                {...block}
              />
            );
          }
          case "paragraph": {
            return <div key={section.label}>paragraph</div>;
          }
        }
      })}
    </>
  );
};
