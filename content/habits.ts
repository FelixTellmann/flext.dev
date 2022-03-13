type HabitDataTypes = "BOOLEAN" | "STRING" | "TIME" | "INT" | "RANGE" | "FLOAT";

export type HabitsType = {
  order: number;
  steps: {
    order: number;
    title: string;
    type: HabitDataTypes;
    value: any;
    max?: number;
    min?: number;
    rows?: number;
    step?: number;
    unit?: string;
  }[];
  title: string;
  type: HabitDataTypes;
  value: false;
  description?: string;
}[];

export const HABITS: HabitsType = [
  {
    order: 2,
    title: "Exercise",
    type: "BOOLEAN",
    value: false,
    steps: [
      {
        order: 1,
        title: "Primary Exercise",
        type: "STRING",
        value: "",
      },
      {
        order: 2,
        title: "Primary exercise duration",
        type: "TIME",
        value: "",
        unit: "h",
      },
      {
        order: 3,
        title: "Secondary Exercise",
        type: "STRING",
        value: "",
      },
      {
        order: 4,
        title: "Secondary exercise duration",
        type: "TIME",
        value: "",
        unit: "h",
      },
    ],
  },
  {
    order: 3,
    title: "Food & Drinks",
    type: "BOOLEAN",
    value: false,
    steps: [
      {
        order: 1,
        title: "Breakfast",
        type: "STRING",
        value: "",
        rows: 2,
      },
      {
        order: 2,
        title: "Coffee Count",
        type: "INT",
        value: 0,
      },
      {
        order: 3,
        title: "Lunch",
        type: "STRING",
        value: "",
        rows: 2,
      },
      {
        order: 4,
        title: "Snacks",
        type: "STRING",
        value: "",
        rows: 2,
      },
      {
        order: 5,
        title: "Dinner",
        type: "STRING",
        value: "",
        rows: 2,
      },
      {
        order: 6,
        title: "Booze Free",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 7,
        title: "Daily Food Healthiness Rating",
        type: "RANGE",
        value: 0,
        min: 0,
        max: 10,
        step: 1,
        unit: "",
      },
    ],
  },
  {
    order: 4,
    title: "Household",
    type: "BOOLEAN",
    value: false,
    steps: [
      {
        order: 1,
        title: "Dishes",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 2,
        title: "Laundry",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 3,
        title: "Ironing",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 4,
        title: "Kitchen Clean-up",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 5,
        title: "Living Area Clean-up",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 6,
        title: "Office Clean-up",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 7,
        title: "Bedroom Clean-up",
        type: "BOOLEAN",
        value: false,
      },
    ],
  },
  {
    order: 5,
    title: "Wind Down",
    type: "BOOLEAN",
    value: false,
    steps: [
      {
        order: 1,
        title: "Start wind down routine",
        type: "TIME",
        value: "",
      },
      {
        order: 2,
        title: "Brush & Floss Teeth",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 3,
        title: "Charge devices away from bedside",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 4,
        title: "Share Appreciations",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 5,
        title: "Daily log",
        type: "STRING",
        value: "",
        rows: 5,
      },
      {
        order: 6,
        title: "Review Plan for tomorrow",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 7,
        title: "Complete Habit tracking",
        type: "BOOLEAN",
        value: false,
      },
      {
        order: 8,
        title: "Read in bed",
        type: "STRING",
        value: "",
        rows: 1,
      },
    ],
  },
];
