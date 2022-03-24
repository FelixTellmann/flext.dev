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
          <div key={section.type + sectionIndex} className="mb-4 flex flex-col gap-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex text-sm">
                <span className="bg-white pr-4 font-bold text-cyan-500">{section.label}</span>
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
