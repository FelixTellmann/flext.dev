import { ProcessStep } from "_client/progress-steps/useProgressSteps";

export type HabitSteps = ProcessStep & {
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
    }
  | {
      id: string;
      label: string;
      type: "switch";
      default?: boolean;
      info?: string;
    }
  | {
      id: string;
      label: string;
      options: { label: string; value: string }[];
      type: "radio";
      default?: string;
      info?: string;
    }
  | {
      id: string;
      label: string;
      type: "number";
      default?: number;
      float?: boolean;
      info?: string;
      placeholder?: string;
      unit?: string;
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
    }
  | {
      id: string;
      label: string;
      options: { label: string; value: string }[];
      type: "select";
      default?: string;
      info?: string;
    }
  | {
      id: string;
      label: string;
      type: "text";
      default?: string;
      info?: string;
      placeholder?: string;
    }
  | {
      id: string;
      label: string;
      type: "textarea";
      default?: string;
      info?: string;
      placeholder?: string;
    }
  | {
      id: string;
      label: string;
      type: "richtext";
      default?: string;
      info?: string;
      placeholder?: string;
    }
  | {
      id: string;
      label: string;
      type: "datetime";
      day?: "numeric" | "2-digit" | undefined;
      default?: Date;
      hour?: "numeric" | "2-digit" | undefined;
      hour12?: boolean | undefined;
      info?: string;
      minute?: "numeric" | "2-digit" | undefined;
      month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
      placeholder?: string;
      second?: "numeric" | "2-digit" | undefined;
      weekday?: "long" | "short" | "narrow" | undefined;
    }
  | {
      content: string;
      type: "header";
    }
  | {
      content: string;
      type: "paragraph";
    };

export type HabitSection = {
  blocks: HabitBlock[];
  label: string;
  type: string;
  limit?: number;
};

export const HABITS: HabitSteps[] = [
  {
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
        type: "datetime",
        minute: "2-digit",
        hour: "2-digit",
        hour12: true,
      },
      {
        id: "maui",
        label: "Maui",
        info: "Today is going to be a great day",
        type: "switch",
      },
      {
        id: "plan",
        label: "Plan my day",
        info: "Review the time blocks & tasks for the day.",
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
    ],
  },
  {
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
              { label: "Walk", value: "run" },
              { label: "Hike", value: "run" },
            ],
            type: "select",
          },
          {
            id: "duration",
            type: "datetime",
            label: "Duration",
            minute: "2-digit",
            hour: "2-digit",
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
    title: "Household",
    description: "Why can’t the house clean itself? It seems to get dirty by itself.",
    completed: false,
    selected: false,
    blocks: [],
  },
  {
    title: "Wind Down",
    description: "Your future depends on your dreams, so go to sleep",
    completed: false,
    selected: false,
    blocks: [],
  },
];
