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

export const HabitsOld: HabitsType = [
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
