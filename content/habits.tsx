import { ProcessStep } from "_client/progress-steps/useProgressSteps";

export type HabitStepState = ProcessStep & {
  blocks: (HabitBlock & Required<Pick<HabitBlock, "value">>)[];
  sections: HabitSection[];
};

export type HabitStep = ProcessStep & {
  blocks?: HabitBlock[];
  sections?: HabitSection[];
};

export type HabitBlock =
  | {
      id: string;
      label: string;
      type: "checkbox";
      default?: boolean;
      info?: string;
      value?: boolean;
    }
  | {
      id: string;
      label: string;
      type: "switch";
      default?: boolean;
      info?: string;
      value?: boolean;
    }
  | {
      id: string;
      label: string;
      options: { label: string; value: string }[];
      type: "radio";
      default?: string;
      info?: string;
      value?: string;
    }
  | {
      id: string;
      label: string;
      type: "number";
      default?: string;
      float?: boolean;
      info?: string;
      placeholder?: string;
      unit?: string;
      value?: string;
    }
  | {
      default: number;
      id: string;
      label: string;
      max: number;
      min: number;
      step: number;
      type: "range";
      unit: string;
      info?: string;
      value?: number;
    }
  | {
      id: string;
      label: string;
      options: { label: string; value: string }[];
      type: "select";
      default?: string;
      info?: string;
      value?: string;
    }
  | {
      id: string;
      label: string;
      type: "text";
      default?: string;
      info?: string;
      placeholder?: string;
      value?: string;
    }
  | {
      id: string;
      label: string;
      type: "textarea";
      default?: string;
      info?: string;
      placeholder?: string;
      value?: string;
    }
  | {
      id: string;
      label: string;
      type: "richtext";
      /**
       * JSON.parse able to match Slate editor
       * */
      default?: string;
      info?: string;
      placeholder?: string;
      value?: string;
    }
  | {
      id: string;
      label: string;
      type: "time";
      default?: Date;
      hour?: boolean;
      hour12?: boolean | undefined;
      info?: string;
      minute?: boolean;
      placeholder?: string;
      second?: boolean;
      value?: Date;
    }
  | {
      content: string;
      type: "header";
      default?: "";
      value?: "";
    }
  | {
      content: string;
      type: "paragraph";
      default?: "";
      value?: "";
    };

export type HabitSection = {
  blocks: HabitBlock[];
  label: string;
  type: string;
  limit?: number;
};

export const HABITS: HabitStep[] = [
  {
    id: "morning",
    title: "Rise & Shine",
    description: "Getting ready in the morning for a fresh start in the day.",
    completed: true,
    selected: false,
    blocks: [
      {
        id: "snoozeFree",
        label: "Up without Snooze",
        info: "Start the day fresh and on time.",
        type: "switch",
      },
      {
        id: "wakeUpTime",
        label: "Get up in the morning",
        info: "Make the most out of the day!",
        type: "time",
        minute: true,
        hour: true,
        hour12: false,
        default: new Date(new Date(0).setHours(6, 45)),
      },
      {
        id: "maui",
        label: "Maui",
        info: "Today is going to be a great day",
        type: "switch",
      },
      {
        id: "weight",
        label: "Weight",
        info: "Measure weight in the morning",
        type: "number",
        unit: "kg",
        float: true,
      },
      {
        id: "teethMorning",
        label: "Brush & Floss",
        info: "Best done right before taking a shower.",
        type: "switch",
      },
      {
        id: "showerMorning",
        label: "Morning Shower",
        info: "Best done right before taking a shower.",
        type: "switch",
      },
      {
        id: "bedMade",
        label: "Made the bed",
        info: "Done in the morning before starting anything else.",
        type: "switch",
      },
      {
        id: "plan",
        label: "Plan my day",
        info: "Review the time blocks & tasks for the day.",
        type: "switch",
      },
      {
        id: "onething",
        label: "The One Thing",
        info: "What is today's ONE THING such as by doing it, that everything else will be easier or unnecessary?",
        type: "richtext",
      },
    ],
  },
  {
    id: "exercise",
    title: "Exercise",
    description: "Do something today that your future self will thank you for.",
    completed: false,
    selected: false,
    blocks: [
      {
        id: "watchRings",
        label: "Closed Rings",
        info: "Closed all three rings on my watch. No other!",
        type: "switch",
      },
      {
        id: "measureWeight",
        label: "Step on the Scale",
        info: "Doing it makes all the difference.",
        type: "switch",
      },
      {
        id: "type",
        label: "Type of Exercise",
        options: [
          { label: "Run", value: "run" },
          { label: "Walk", value: "walk" },
          { label: "Hike", value: "hike" },
        ],
        type: "select",
      },
    ],
    sections: [
      {
        type: "exercise",
        label: "Exercise",
        blocks: [
          {
            id: "type",
            label: "Type of Exercise",
            options: [
              { label: "Run", value: "run" },
              { label: "Walk", value: "walk" },
              { label: "Hike", value: "hike" },
            ],
            type: "select",
          },
          {
            id: "duration",
            type: "time",
            label: "Duration",
            minute: true,
            hour: true,
            default: new Date(0),
          },
          {
            id: "intensity",
            type: "range",
            label: "Intensity Rating",
            info: "Rated from low intensity (1) to high intensity (10) based on average heart rate.",
            min: 1,
            max: 10,
            step: 1,
            unit: "",
            default: 1,
          },
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Food & Drinks",
    description: "Nothing tastes as good as Slim feels.",
    completed: false,
    selected: false,
    blocks: [
      {
        id: "sober",
        label: "Booze Free",
        type: "switch",
      },
      {
        id: "coffeeCount",
        label: "Coffee Count",
        info: "When is too much too much?",
        type: "range",
        step: 1,
        min: 0,
        max: 6,
        unit: " cups",
        default: 0,
      },
      {
        id: "foodRating",
        label: "Food Rating",
        info: "Rated from unhealthy (1) to super healthy (10).",
        type: "range",
        step: 1,
        min: 1,
        max: 10,
        unit: "",
        default: 1,
      },
    ],
    sections: [
      {
        type: "food",
        label: "Food",
        blocks: [
          {
            id: "period",
            label: "Eating Period",
            type: "select",
            options: [
              { label: "Breakfast", value: "breakfast" },
              { label: "Lunch", value: "lunch" },
              { label: "Dinner", value: "dinner" },
              { label: "Snacks", value: "snacks" },
            ],
          },
          {
            id: "food",
            type: "richtext",
            label: "Food",
          },
          {
            id: "foodRating",
            label: "Food Rating",
            info: "Rated from unhealthy (1) to super healthy (10).",
            type: "range",
            step: 1,
            min: 1,
            max: 10,
            unit: "",
            default: 1,
          },
        ],
      },
      {
        type: "beverage",
        label: "Beverage",
        blocks: [
          {
            id: "beverage",
            type: "richtext",
            label: "Beverage",
          },
          {
            id: "beverageRating",
            label: "Beverage Rating",
            info: "Rated from unhealthy (1) to super healthy (10).",
            type: "range",
            step: 1,
            min: 1,
            max: 10,
            unit: "",
            default: 1,
          },
        ],
      },
    ],
  },
  {
    id: "household",
    title: "Household",
    description: "Why can’t the house clean itself? It seems to get dirty by itself.",
    completed: false,
    selected: false,
    blocks: [],
    sections: [
      {
        type: "chores",
        label: "Household Chores",
        blocks: [
          {
            id: "type",
            label: "Type of Household Work",
            options: [
              { label: "Dishes", value: "dishes" },
              { label: "Laundry", value: "laundry" },
              { label: "Ironing", value: "ironing" },
              { label: "Clean Kitchen", value: "cleanKitchen" },
              { label: "Clean Living Room", value: "cleanLivingRoom" },
              { label: "Clean Office", value: "cleanOffice" },
              { label: "Clean Bedroom", value: "cleanBedroom" },
            ],
            type: "select",
          },
          {
            id: "duration",
            type: "time",
            label: "Duration",
            minute: true,
            hour: true,
            default: new Date(0),
          },
        ],
      },
    ],
  },
  {
    id: "evening",
    title: "Wind Down",
    description: "Your future depends on your dreams, so go to sleep",
    completed: false,
    selected: false,
    blocks: [
      {
        id: "bedTime",
        label: "Time in bed",
        type: "time",
        minute: true,
        hour: true,
        hour12: true,
        default: new Date(new Date(0).setHours(22, 30)),
      },
      {
        id: "appreciation",
        label: "Appreciation",
        info: "Share 3 appreciations with Liz",
        type: "switch",
      },
      {
        id: "reflect",
        label: "Reflect on my Day",
        info: "How was my day? Anything exciting, new fun? How was I feeling?",
        type: "richtext",
      },
      {
        id: "reviewPlan",
        label: "Review Plan for Tomorrow",
        info: "Whats up on my list for tomorrow?",
        type: "switch",
      },
      {
        id: "teethEvening",
        label: "Brush & Floss",
        info: "Best done right before taking a shower.",
        type: "switch",
      },
      {
        id: "read",
        label: "Reading in bed",
        info: "What book am I reading? What has my last part been about",
        type: "richtext",
      },
      {
        id: "deviceCleared",
        label: "Charge devices away from bedside",
        type: "switch",
      },
    ],
  },
];
