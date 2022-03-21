import { HabitBlock, HabitStep, HabitStepState } from "content/habits";

function getBlockDefault(block: HabitBlock): HabitBlock["value"] {
  switch (block.type) {
    case "header":
      return block.default ?? "";
    case "checkbox":
      return block.default ?? false;
    case "switch":
      return block.default ?? false;
    case "radio":
      return block.default ?? block.options.at(0)?.value;
    case "number":
      return block.default ?? "0";
    case "range":
      return block.default;
    case "select":
      return block.default ?? block.options.at(0)?.value;
    case "text":
      return block.default ?? "";
    case "textarea":
      return block.default ?? "";
    case "richtext":
      return block.default ?? "";
    case "time":
      return block.default ?? new Date(new Date(0).setHours(0, 0));
    case "paragraph":
      return block.default ?? "";
  }
}

export function habitInitializer(HABITS: HabitStep[]): HabitStepState[] {
  /* @ts-ignore */
  return HABITS.map((habit) => ({
    ...habit,
    blocks: habit.blocks
      ? habit.blocks.map((block) => ({ ...block, value: getBlockDefault(block) }))
      : [],
    sections: habit.sections
      ? habit.sections.map((section) => ({
          ...section,
          blocks: section.blocks.map((block) => ({ ...block, value: getBlockDefault(block) })),
        }))
      : [],
  }));
}
