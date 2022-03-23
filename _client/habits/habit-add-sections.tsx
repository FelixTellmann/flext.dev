import { ChevronDownIcon } from "@heroicons/react/solid";
import { HabitReducerActions } from "_client/habits/_habit-reducer";
import { HabitStepState } from "content/habits";
import { Dispatch, FC } from "react";
import { BsPlus } from "react-icons/bs";

import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type HabitSectionProps = {
  dispatch: Dispatch<HabitReducerActions>;
  index: number;
  habit?: HabitStepState;
};

export const HabitAddSections: FC<HabitSectionProps> = ({ habit, index, dispatch }) => {
  return (
    <>
      {habit?.sections.length
        ? <div className="relative">
            <div className="flex absolute inset-0 items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="flex relative justify-center text-sm">
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button className="px-2 text-gray-500 bg-white" type="button">
                      <div className="flex justify-center items-center w-7 h-7 text-2xl h:text-white h:bg-cyan-400 rounded-full border-2 border-cyan-400 transition-colors">
                        <BsPlus />
                      </div>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute bottom-full left-1/2 z-10 px-4 mb-2 transform -translate-x-1/2 sm:px-0 lg:max-w-3xl">
                        <div className="flex flex-col gap-3 p-4">
                          {habit.sections.map(({ label, type }) => (
                            <button
                              key={type}
                              className="flex relative z-10 py-2 px-4 text-xs bg-white h:bg-cyan-300 rounded ring-1 ring-black ring-opacity-5 shadow-md box-shadow-4xl"
                              type="button"
                              onClick={(e) => {
                                console.log(e);
                                e.preventDefault();
                                e.stopPropagation();
                                close();
                                dispatch({
                                  type: "ADD_SECTION",
                                  payload: { habitIndex: index, type },
                                });
                              }}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        : null}
    </>
  );
};
