import { Divider } from "_client/form/divider";
import { HabitReducerActions } from "_client/habits/_habit-reducer";
import { HabitSectionBlocks } from "_client/habits/habit-section-blocks";
import { HabitStepState } from "content/habits";
import { Dispatch, FC } from "react";

type HabitSectionProps = {
  dispatch: Dispatch<HabitReducerActions>;
  index: number;
  habit?: HabitStepState;
};

export const HabitSections: FC<HabitSectionProps> = ({ habit, index, dispatch }) => {
  return (
    <>
      {habit?.sectionsAdded?.map((section, sectionIndex) => {
        return (
          <div key={section.type + sectionIndex} className="flex flex-col gap-2 mb-4">
            <div className="relative">
              <div className="flex absolute inset-0 items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="flex relative text-sm">
                <span className="pr-4 font-bold text-cyan-500 bg-white">{section.label}</span>
              </div>
            </div>
            <div className="mb-4"></div>
            <HabitSectionBlocks
              dispatch={dispatch as Dispatch<HabitReducerActions>}
              habitIndex={index}
              section={section}
              sectionIndex={sectionIndex}
            />
          </div>
        );
      })}
    </>
  );
};
