import { habitReducer } from "_client/habits/_habit-reducer";
import { Dispatch, Reducer, ReducerWithoutAction, useCallback, useEffect, useReducer, useState } from "react";
import { unknown } from "zod";

export type ProcessStep = {
  completed: boolean;
  id: string;
  selected: boolean;
  title: string;
  description?: string;
};

export type BaseReducerActions = {
  payload: {
    index?: number;
    selectAny?: boolean;
  };
  type: "SELECT_STEP";
};

const baseReducer = <T extends any, A extends any>(
  state: (ProcessStep & T)[],
  action: BaseReducerActions,
  reducer: Reducer<(ProcessStep & T)[], A extends BaseReducerActions ? BaseReducerActions : any>
) => {
  switch (action.type) {
    case "SELECT_STEP": {
      const { index, selectAny } = action.payload;

      if (index === undefined) {
        if (state.some((step) => step.selected)) return state;

        for (let i = 0; i < state.length; i++) {
          state[i].selected = true;
          if (state[i].completed) {
            state[i].selected = false;
            continue;
          }
          return [
            ...state.map((step, j) => {
              step.selected = i === j;
              return step;
            }),
          ];
        }
        state[state.length - 1].selected = true;

        return [
          ...state.map((step, j) => {
            step.selected = j === state.length - 1;
            return step;
          }),
        ];
      }

      if (selectAny) {
        return [
          ...state.map((step, i) => {
            step.selected = i === index;
            return step;
          }),
        ];
      }

      if (!selectAny) {
        if (state[index].selected) return state;

        for (let i = 0; i < state.length; i++) {
          if (i === index) {
            console.log(i);
            return [
              ...state.map((step, j) => {
                return { ...step, selected: i === j };
              }),
            ];
          }

          if (state[i].completed) {
            continue;
          }

          return [
            ...state.map((step, j) => {
              step.selected = i === j;
              return step;
            }),
          ];
        }

        state[state.length - 1].selected = true;

        return [
          ...state.map((step, j) => {
            step.selected = j === state.length - 1;
            return step;
          }),
        ];
      }
      break;
    }
    default: {
      return reducer(state, action);
    }
  }

  return state;
};

export const useProgressSteps = <T extends unknown, ReducerActions extends any>(
  initialSteps: (ProcessStep & T)[],
  reducer: Reducer<(ProcessStep & T)[], ReducerActions> = (state, action) => state
): {
  dispatch: Dispatch<BaseReducerActions & ReducerActions>;
  selectStep: (index: number, selectAny?: any) => void;
  selectedIndex: number;
  steps: (ProcessStep & T)[];
} => {
  const [steps, dispatch] = useReducer(
    (state: any[], action: BaseReducerActions) =>
      baseReducer<T, ReducerActions>(state, action, reducer),
    initialSteps
  );

  const selectStep = useCallback((index: number, selectAny = false) => {
    dispatch({ type: "SELECT_STEP", payload: { index, selectAny } });
  }, []);

  const selectInitialStep = useCallback(() => {
    dispatch({ type: "SELECT_STEP", payload: {} });
  }, []);

  useEffect(() => {
    selectInitialStep();
  }, [selectInitialStep]);

  return {
    steps,
    selectStep,
    dispatch: dispatch as Dispatch<BaseReducerActions & ReducerActions>,
    selectedIndex: steps.findIndex(({ selected }) => selected),
  };
};

export default useProgressSteps;
