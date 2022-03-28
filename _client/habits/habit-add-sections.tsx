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
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button className="bg-white px-2 text-gray-500" type="button">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-cyan-400 text-2xl transition-colors h:bg-cyan-400 h:text-white">
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
                      <Popover.Panel className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="flex flex-col gap-3 p-4">
                          {habit.sections.map(({ label, type }) => (
                            <button
                              key={type}
                              className="box-shadow-4xl relative z-10 flex rounded bg-white py-2 px-4 text-xs shadow-md ring-1 ring-black ring-opacity-5 h:bg-cyan-300"
                              type="button"
                              onClick={(e) => {
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
